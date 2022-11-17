import { useMemo } from "react";

import { useAppSelector } from "../redux/hooks";
import { getUniqueBooksInCart, getCartTotal } from "../redux/cart";

import BookCartRow from "../components/BookCartRow";

function Cart() {
  const cartTotal = useAppSelector(getCartTotal);
  const uniqueIdsInCart = useAppSelector((state) =>
    getUniqueBooksInCart(state)
  );

  // useMemo is unnecessary here due since it's such a small computation, but I wanna demonstrate my understanding of it
  const tax = useMemo(() => cartTotal * 0.13, [cartTotal]);

  return (
    <div className="flex w-screen pt-24 justify-center">
      <div className="flex justify-between w-9/12">
        <div className="w-8/12">
          {uniqueIdsInCart.length === 0 && (
            <h1 className="text-center text-2xl font-thin">
              Your cart is empty!
            </h1>
          )}
          {uniqueIdsInCart.map((id) => (
            <div key={id} className="mb-4">
              <BookCartRow bookId={Number(id)} />
            </div>
          ))}
        </div>
        <div className="flex-grow mt-4 ml-6">
          <h1 className="mb-2">Order Summary</h1>
          <hr />
          <div className="flex">
            <p className="font-thin text-gray-500">Subtotal:</p>
            <p className="ml-auto font-thin">${cartTotal.toFixed(2)}</p>
          </div>
          <div className="flex">
            <p className="font-thin text-gray-500">Estimated tax:</p>
            <p className="ml-auto font-thin">${tax.toFixed(2)}</p>
          </div>
          <hr />
          <div className="flex">
            <p className="font-medium">Estimated Total:</p>
            <p className="ml-auto font-medium">
              ${(cartTotal + tax).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
