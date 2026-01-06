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
    <div>
      <h2 className="text-3xl mb-4">{item.metadata.text}</h2>
      <div className="grid grid-cols-5">
        <img src={item.secure_url} alt={item.metadata.text} className="col-span-3" />
      </div>
    </div>
  );
};

export default Show;
