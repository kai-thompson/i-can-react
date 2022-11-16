import React from "react";
import { useParams } from "react-router";

import { useAppSelector } from "../redux/hooks";
import { getBookById } from "../redux/books";

import BookDetails from "../components/BookDetails";

const Product = () => {
  const params = useParams();
  const id = Number(params.id);

  const book = useAppSelector((state) => getBookById(state, id));

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
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
