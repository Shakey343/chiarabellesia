import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

type ImageItem = {
  id: string;
  image: CloudImgObj;
  heightPercent: number;
};

type CloudImgObj = {
  public_id: string;
  image_url: string;
  secure_url: string;
  asset_folder: string;
  filename: string;
  metadata: {
    date: string;
    text: string;
  };
  tags: string[];
};

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const assignRandomHeights = (items: CloudImgObj[]): ImageItem[] => {
  const weights = items.map(() => Math.random() * 1.5 + 0.6);
  const total = weights.reduce((a, b) => a + b, 0);

  return items.map((image, i) => ({
    id: image.public_id,
    image,
    heightPercent: (weights[i] / total) * 100,
  }));
};

const distributeIntoColumns = (
  images: CloudImgObj[],
  columnCount: number
): ImageItem[][] => {
  const shuffled = shuffle(images);

  const columns: CloudImgObj[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((img, i) => {
    columns[i % columnCount].push(img);
  });

  return columns.map(assignRandomHeights);
};

const Grid = ({ genre, number }: { genre: string; number: number }) => {
  const [columns, setColumns] = useState<ImageItem[][]>([]);

  // console.log({columns})

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }api/images/by-folder?folder=WEBSITE/${genre.toUpperCase()}`
      )
      .then((res) => {
        console.log(res);
        setColumns(distributeIntoColumns(res.data, 3));
        // if mobile -> setColumns(distributeIntoColumns(res.data, 1));
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, [genre, number]);

  return (
    <div className="w-full h-200 grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4 h-full">
          {column.map((item, index) => (
            <div
              key={item.id}
              style={{
                height: `${item.heightPercent}%`,
                // height: onmouseover ? '100%' : `${item.heightPercent}%`,
                paddingBottom: index !== column.length - 1 ? "0.5rem" : "0",
              }}
              className="relative overflow-hidden"
            >
              <Link to={item.image.metadata?.text}>
                <img
                  src={item.image.secure_url}
                  alt={item.image.metadata?.text ?? ""}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      ))}
      <div className="absolute rotate-270 -left-3.5 top-20"><p className="w-2">{genre}</p></div>
      <div className="absolute rotate-270 -left-3.5 top-90"><p className="w-2">{genre}</p></div>
      <div className="absolute rotate-270 -left-3.5 top-160"><p className="w-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-3 top-20"><p className="w-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-3 top-90"><p className="w-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-3 top-160"><p className="w-2">{genre}</p></div>
    </div>
  );
};

export default Grid;
