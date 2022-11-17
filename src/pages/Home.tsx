import { Link, useNavigate } from "react-router-dom";

import StyledButton from "../components/StyledButton";
import { useAppSelector } from "../redux/hooks";

const NUMBER_OF_BOOKS_TO_DISPLAY = 5;

function Home() {
  const navigate = useNavigate();

  const books = useAppSelector((state) => state.books.books);

  return (
    <div className="flex flex-col justify-center pt-16">
      <div className="flex justify-center items-center">
        {books.slice(0, NUMBER_OF_BOOKS_TO_DISPLAY).map((book) => (
          <Link
            to={`/product/${book.id}`}
            key={book.id}
            className={`${
              book.id !== NUMBER_OF_BOOKS_TO_DISPLAY && "-mr-12"
            } hover:-translate-y-5 duration-300 transform shadow-sm shadow-black rounded-lg hover:shadow-lg hover:shadow-black`}
          >
            <img
              className="w-40 h-auto rounded-lg"
              src={book.image}
              alt={`${book.title} cover`}
            />
          </Link>
        ))}
      </div>
      <h1 className="text-center font-medium text-5xl mt-6 mx-auto w-1/2 leading-snug">
        All your favorite <br />
        J.R.R. Tolkien books in one place
      </h1>
      <h2 className="text-center font-light text-2xl mt-6 mx-auto w-1/2 text-gray-600">
        Enjoy the best books from the Lord of the Rings to The Hobbit series.{" "}
        <br />
        No need to search for the book you want; it&apos;s all here.
      </h2>
      <div className="mx-auto mt-12">
        <StyledButton onClick={() => navigate("/products")}>
          Explore our Selection
        </StyledButton>
      </div>
    </div>
  );
}

export default Home;
