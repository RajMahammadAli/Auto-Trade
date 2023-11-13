import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ({ product }) {
  const { _id, image, name, brand, type, price, rating } = product;
  console.log(_id);

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
            <Link to={`/productDetails/${_id}`} className="btn btn-primary">
              Details
            </Link>
            <Link to={`/updateForm/${_id}`} className="btn btn-primary">
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
