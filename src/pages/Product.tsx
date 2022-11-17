import { useParams } from "react-router-dom";

import { useAppSelector } from "../redux/hooks";
import { getBookById } from "../redux/books";

import BookDetails from "../components/BookDetails";
import AddToCart from "../components/AddToCart";

function Product() {
  const params = useParams();
  const id = Number(params.id);

  const book = useAppSelector((state) => getBookById(state, id));

  return (
    <div className="flex justify-center pt-16">
      <img
        src={book?.image}
        alt={`${book?.title} cover`}
        className="w-96 rounded-md"
      />
      <div className="flex flex-col ml-12 pt-14 pb-24">
        <BookDetails
          title={book?.title}
          author={book?.author}
          description={book?.description}
        />
        <div className="flex mt-auto items-center">
          <h1 className="text-xl font-bold mr-8">${book?.price}</h1>
          <AddToCart bookId={Number(book?.id)} />
        </div>
      </div>
    </div>
  );
}

export default Product;
