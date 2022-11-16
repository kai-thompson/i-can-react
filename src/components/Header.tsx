import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-12">
      <div className="flex w-96 justify-between">
        <Link to='/' className="text-3xl">Home</Link>
        <Link to='/products' className="text-3xl">Products</Link>
        <Link to='/cart' className="text-3xl">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
