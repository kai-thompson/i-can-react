import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../assets/icons/cart.svg";
import siteLogo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex justify-between w-full py-4 px-12">
      <div className="flex w-80 justify-between items-center">
        <Link to="/">
          <img
            src={siteLogo}
            alt="Site logo"
            style={{ transform: "scaleX(-1)" }}
            className="h-4 w-auto"
          />
        </Link>
        <Link to="/" className="text-3xl font-light">
          Home
        </Link>
        <Link to="/products" className="text-3xl font-light">
          Products
        </Link>
      </div>
      <Link to="/cart" className="flex text-sm items-center">
        <CartIcon className="w-6" />
        <p className="ml-2">Cart</p>
      </Link>
    </header>
  );
}

export default Header;
