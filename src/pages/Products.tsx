import { Link } from "react-router-dom";

import BookTile from "../components/BookTile";

import books from "../mocks/books.mock";

function Products() {
  return (
    <div className="pt-24">
      <div className="grid grid-cols-3 place-items-center gap-8">
        {books.map((book) => (
          <Link key={book.id} to={`/product/${book.id}`}>
            <BookTile
              title={book.title}
              image={book.image}
              price={book.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
