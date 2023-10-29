import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
 

  return (
    <div>
      <div className="border mx-5 my-2 p-5 pb-12 pt-3 rounded">
        <Link to={`product/${product._id}`}>
          <img src={product.image} alt="logo" className="h-44 w-44" />
        </Link>
        <h1 className="mt-1">{product.brand}</h1>
        <h1 className="m-1">{product.name}</h1>
        <Rating value={product.rating} text={product.numReviews} />
        <h1 className="mt-1">${product.price}</h1>
      </div>
    </div>
  );
};

export default ProductScreen;
