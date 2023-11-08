import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function ({ product }) {
  const { id, image, name, brand, type, price, rating } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brand}</p>
          <p>{type}</p>
          <p>{price}</p>
          <div className="rating">
            <StarRating rating={rating} />
          </div>

          <div className="card-actions justify-center">
            <button onClick={handleProductDetails} className="btn btn-primary">
              Details
            </button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
