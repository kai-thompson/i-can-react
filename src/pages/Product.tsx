import React from "react";
import { useParams } from "react-router";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getBookById } from "../redux/books";
import { addToCart, getQuantityOfBookId } from "../redux/cart";

import BookDetails from "../components/BookDetails";

const Product = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  const book = useAppSelector((state) => getBookById(state, id));
  const quantity = useAppSelector((state) => getQuantityOfBookId(state, id));

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book.id));
    }
  };

  return (
    <div className="flex">
      <BookDetails
        title={book?.title}
        author={book?.author}
        description={book?.description}
      />
      <img src={book?.image} />
      <div>
        <h1>Price: {book?.price}</h1>
        <h1>Quantity: {quantity}</h1>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
