import stock from "../data";
// 👉 STEP 6 - React Router imports (useNavigate)
import { useNavigate } from "react-router-dom";

function ItemsList() {
  // use in an onClick to send to an items page. Need to use useParams in ItemDetails to reset page for correct item id
  const navigate = useNavigate();
  return (
    <div className="items-list-wrapper">
      {stock.map((item) => (
        <div className="item-card" key={item.id}>
          {/* 👉 STEP 6b - Navigate to the /items/<id of item path when clicking the button */}
          <button onClick={() => navigate(`/items/${item.id}`)}>
            <img
              className="items-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </button>

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
