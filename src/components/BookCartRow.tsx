import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getBookById } from "../redux/books";
import {
  getQuantityOfBookId,
  removeEntireQuantityFromCart,
} from "../redux/cart";

interface BookCartRowProps {
  bookId: number;
}

const BookCartRow = ({ bookId }: BookCartRowProps) => {
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => getBookById(state, bookId));
  const quantity = useAppSelector((state) =>
    getQuantityOfBookId(state, bookId)
  );

  const handleRemoveFromCart = () => {
    dispatch(removeEntireQuantityFromCart(bookId));
  };

  return (
    <div>
      <button className="ml-auto" onClick={handleRemoveFromCart}>
        remove
      </button>
      <div className="flex">
        <img src={book?.image} className="object-contain h-24 w-auto" />
        <div>
          <h1>{book?.title}</h1>
          <h1>{book?.author}</h1>
        </div>
        <div>
          <h1>Price: {book?.price}</h1>
          <h1>Quantity: {quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookCartRow;
