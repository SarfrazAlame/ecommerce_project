import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/productSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.products)
  
  
  return <div>
   
  </div>;
};

export default Cart;
