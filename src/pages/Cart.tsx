import { useAppSelector } from "../redux/hooks";
import { getUniqueBooksInCart, getCartTotal } from "../redux/cart";

import BookCartRow from "../components/BookCartRow";

function Cart() {
  const cartTotal = useAppSelector(getCartTotal);
  const uniqueIdsInCart = useAppSelector((state) =>
    getUniqueBooksInCart(state)
  );

  return (
    <div>
      {uniqueIdsInCart.map((id) => (
        <BookCartRow key={id} bookId={Number(id)} />
      ))}
      <div>
        <h1>
          Total:
          {cartTotal}
        </h1>
      </div>
    </div>
  );
}

export default Cart;
