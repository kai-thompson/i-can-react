import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const [isValidWindowSize, setIsValidWindowSize] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 950) {
        setIsValidWindowSize(false);
      } else {
        setIsValidWindowSize(true);
      }
    });
  }, []);

  if (!isValidWindowSize) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <p className="text-2xl font-medium">
          Please use a larger screen to view this site.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
