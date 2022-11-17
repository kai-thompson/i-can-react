import { Link } from "react-router-dom";

import books from "../mocks/books.mock";

function Products() {
  return (
    <div className="pt-24">
      <div className="grid grid-cols-3 place-items-center gap-8">
        {books.map((book) => (
          <Link
            key={book.id}
            to={`/product/${book.id}`}
            className="shadow-md hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-1 duration-300 max-w-[20rem]"
          >
            <img
              src={book.image}
              alt={`${book.title} cover`}
              className="h-64 w-auto rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
