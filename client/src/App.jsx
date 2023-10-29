import React from "react";
import Navbar from "./components/Navbar";
import HomeScreens from "./screens/HomeScreens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./components/Cart";
const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <h1 className="text-3xl w-2/3 text-center mt-1 font-medium text-gray-600">
          ECOMMERCE APP
        </h1>
        <div className="">
          <Routes>
            <Route path="/" element={<HomeScreens />} />
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
