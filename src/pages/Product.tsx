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
    <div className="flex">
      <img src={book?.image} alt={`${book?.title} cover`} />
      <div>
        <BookDetails
          title={book?.title}
          author={book?.author}
          description={book?.description}
        />
        <div>
          <h1>
            Price:
            {book?.price}
          </h1>
        </div>
      </div>
      <AddToCart bookId={Number(book?.id)} />
    </div>
  );
}

export default Product;
