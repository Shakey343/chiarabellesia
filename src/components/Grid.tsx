import { useEffect, useState } from "react";
import axios from "axios";

type ImageItem = {
  id: string;
  src: string;
  // alt: string;
  heightPercent: number;
};

type CloudImgObj = {
  public_id: string;
  image_url: string;
  url: string;
  metadata: {
    link_to: string;
    subtitle: string;
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

const assignRandomHeights = (items: string[]): ImageItem[] => {
  const weights = items.map(() => Math.random() * 1.5 + 0.6);
  const total = weights.reduce((a, b) => a + b, 0);

  return items.map((src, i) => ({
    id: `${i}-${src}`,
    src,
    heightPercent: (weights[i] / total) * 100,
  }));
};

const distributeIntoColumns = (
  images: CloudImgObj[],
  columnCount: number
): ImageItem[][] => {
  const shuffled = shuffle(images);

  const columns: string[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((img, i) => {
    columns[i % columnCount].push(img.url);
  });

  return columns.map(assignRandomHeights);
};

const Grid = ({ genre, number }: { genre: string; number: number }) => {
  const [columns, setColumns] = useState<ImageItem[][]>([]);

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
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, [genre, number]);

  return (
    <div className="w-full h-200 grid grid-cols-3 gap-4 relative">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4 h-full">
          {column.map((item, index) => (
            <div
              key={item.id}
              style={{
                height: `${item.heightPercent}%`,
                paddingBottom: index !== column.length - 1 ? "0.5rem" : "0",
              }}
              className="relative overflow-hidden"
            >
              <img
                src={item.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
      <div className="absolute rotate-270 -left-6 top-20"><p className="w-2 h-2">{genre}</p></div>
      <div className="absolute rotate-270 -left-6 top-90"><p className="w-2 h-2">{genre}</p></div>
      <div className="absolute rotate-270 -left-6 top-160"><p className="w-2 h-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-6 top-20"><p className="w-2 h-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-6 top-90"><p className="w-2 h-2">{genre}</p></div>
      <div className="absolute rotate-90 -right-6 top-160"><p className="w-2 h-2">{genre}</p></div>
    </div>
  );
};

export default Grid;
