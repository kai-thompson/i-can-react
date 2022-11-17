import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../assets/icons/cart.svg";

function Header() {
  return (
    <header className="flex justify-between w-full py-4 px-12">
      <div className="flex w-80 justify-between">
        <Link to="/" className="text-3xl">
          Home
        </Link>
        <Link to="/products" className="text-3xl">
          Products
        </Link>
      </div>
      <Link to="/cart" className="flex text-sm items-center">
        <CartIcon />
        <p className="ml-2">Cart</p>
      </Link>
    </header>
  );
}

export default Header;
