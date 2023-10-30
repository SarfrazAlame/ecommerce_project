import React, { useEffect, useState } from "react";
import ProductScreen from "./ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/productSlice";

const HomeScreens = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <>
          <h1 className="text-center text-4xl text-gray-700">Loading...</h1>
        </>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-between mt-12">
          {products.map((product) => {
            return <ProductScreen key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreens;
