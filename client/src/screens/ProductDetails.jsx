import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = () => {
  const [qyt, setQyt] = useState(0);
  const { id } = useParams();

  const { products } = useSelector((state) => state.product);
  const product = products.find((x) => x._id === id);

  return (
    <>
      <div className="my-7 text-gray-600 lg:mx-20">
        <Link to={"/"} className="w-full flex gap-1 text-center underline my-4">
          <AiOutlineArrowLeft className="mt-1" />
          <span> GO BACK</span>
        </Link>
        <div className="w-full grid text-center sm:grid-cols-2 lg:grid-cols-3 justify-center gap-24">
          <img
            src={product && product.image}
            alt={product && product.name}
            className="w-80"
          />
          <div>
            <h1 className="w-72 my-5 text-2xl font-serif">
              {product && product.name}
            </h1>
            <hr className="" />
            <div className="flex gap-3 my-5">
              <Rating
                value={product && product.rating}
                text={product && product.numReviews}
              />
              <span className="-mt-1 text-xl">
                {product && product.numReviews} Reviews
              </span>
            </div>
            <hr />
            <h1 className="my-4 text-xl">
              Price : ${product && product.price}
            </h1>
            <hr />
            <h1 className="w-72 my-3 text-lg">
              {product && product.description}
            </h1>
          </div>
          <div className="border border-gray-400 h-44 px-6 py-3 rounded-sm lg:w-72">
            <div className="flex gap-7 ">
              <h1 className="text-xl">Status : </h1>
              <h1>
                {product && product.countInStock > 0 ? (
                  <>
                    <h1 className="my-1">
                      {product && product.countInStock} items remains
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="mt-3">Out of Stock</h1>
                  </>
                )}
              </h1>
            </div>
            <hr />
            {/* {product.countInStock > 0 ? (
              <>
                <div className="flex justify-center my-2 gap-3">
                  <h1>Qty :</h1>
                  <select value={qyt} onChange={(e) => setQyt(e.target.value)}>
                    {[...Array(product.countInStock)].map((x) => (
                      <option  value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : null} */}
            <button className="border mt-3 px-16 py-3 rounded bg-gray-800 text-gray-100 hover:bg-gray-500">
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
