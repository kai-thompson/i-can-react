import React from "react";
import { Link } from "react-router-dom";

import BookTile from "../components/BookTile";

import books from "../mocks/books.mock";

const Products = () => {
  return (
    <div className="pt-24">
      <div className="grid grid-cols-3 place-items-center gap-8">
        {books.map((book) => (
          <Link key={book.id} to={`/product/${book.id}`}>
            <BookTile {...book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
