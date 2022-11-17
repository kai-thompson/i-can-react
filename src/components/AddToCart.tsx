import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getQuantityOfBookId, addAmountToCart } from "../redux/cart";

import StyledButton from "./StyledButton";

interface AddToCartProps {
  bookId: number;
}

function AddToCart({ bookId }: AddToCartProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const quantityInCart = useAppSelector((state) =>
    getQuantityOfBookId(state, bookId)
  );

  const [quantity, setQuantity] = useState<number>(quantityInCart || 1);

  const handleAddToCart = () => {
    dispatch(addAmountToCart({ id: bookId, amount: quantity }));
  };

  const handleProceedToCheckout = () => {
    navigate("/cart");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
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
        onClick={
          quantityInCart === quantity
            ? handleProceedToCheckout
            : handleAddToCart
        }
        className="border-l-[1px] pl-4 ml-2"
      >
        {quantityInCart === quantity ? "Proceed to Cart" : "Add to Cart"}
      </button>
    </StyledButton>
  );
}

export default AddToCart;
