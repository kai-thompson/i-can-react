import { Link } from "react-router-dom";

import books from "../mocks/books.mock";

function Products() {
  return (
    <div className="flex pt-24 justify-center">
      <div className="grid grid-cols-4 place-items-center gap-16 w-10/12">
        {books.map((book) => (
          <Link
            key={book.id}
            to={`/product/${book.id}`}
            className="shadow-md hover:shadow-lg hover:shadow-black hover:-translate-y-1 duration-300 max-w-[20rem] rounded-md"
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
