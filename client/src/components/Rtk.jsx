import React from "react";
import { useGetSingleProductQuery } from "../api/apiSlice";

const Rtk = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery();

  let content;

  if(isLoading){
    content = <p>Loading...</p>
  }else if(isSuccess){
    content = JSON.stringify(products)
  }else if(isError){
    content = <p>{error}</p>
  }

  return <div>
    {content}
  </div>;
};

export default Rtk;
