import React from "react";
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
