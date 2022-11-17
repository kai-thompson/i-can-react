import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getQuantityOfBookId, addAmountToCart } from "../redux/cart";

import StyledButton from "./StyledButton";

interface AddToCartProps {
  bookId: number;
}

function AddToCart({ bookId }: AddToCartProps) {
  const dispatch = useAppDispatch();

  const quantityInCart = useAppSelector((state) =>
    getQuantityOfBookId(state, bookId)
  );

  const [quantity, setQuantity] = useState<number>(quantityInCart);

  const handleAddToCart = () => {
    dispatch(addAmountToCart({ id: bookId, amount: quantity }));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <StyledButton>
      <select
        value={quantity}
        onChange={handleOnChange}
        className="bg-inherit focus:outline-none z-5"
      >
        {Array.from(Array(9)).map((_, index) => {
          const value = index + 1;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <button
        type="submit"
        onClick={handleAddToCart}
        className="border-l-[1px] pl-4 ml-2"
      >
        {quantityInCart > 0 && quantity !== quantityInCart
          ? "Update cart"
          : "Add to cart"}
      </button>
    </StyledButton>
  );
}

export default AddToCart;
