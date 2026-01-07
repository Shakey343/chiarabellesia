import { useLocation } from "react-router";
import type { CloudImgObj } from "../types";

interface LocationState {
  item: CloudImgObj;
}

const Show = () => {
  // const { id } = useParams(); // to get the :id in the url
  const location = useLocation();
  const { item } = location.state as LocationState;
  console.log(item);

  return (
    <div className="mt-10">
      <h2 className="text-3xl mb-4">
        {item.metadata.text || item.metadata.title}
      </h2>
      <div className="grid grid-cols-12 gap-10">
        <img
          src={item.secure_url}
          alt={item.metadata.text || item.metadata.title}
          className="col-span-9"
        />
        <div className="col-span-3">{item.metadata.description || "Kiki - please add a description ☺️"}</div>
      </div>
    </div>
  );
};

export default Show;
