import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getBookById } from "../redux/books";
import {
  getQuantityOfBookId,
  removeEntireQuantityFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cart";

import { ReactComponent as MinusIcon } from "../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as XMark } from "../assets/icons/x-mark.svg";

interface BookCartRowProps {
  bookId: number;
}

function BookCartRow({ bookId }: BookCartRowProps) {
  const dispatch = useAppDispatch();

  const book = useAppSelector((state) => getBookById(state, bookId));
  const quantity = useAppSelector((state) =>
    getQuantityOfBookId(state, bookId)
  );

  return (
    <div className="flex border-2 p-4 mx-4 rounded shadow-md ">
      <div className="flex justify-between w-full">
        <Link className="flex" to={`/product/${bookId}`}>
          <img
            src={book?.image}
            alt={`${book?.title} cover`}
            className="object-contain h-24 w-auto rounded mr-4"
          />
          <div>
            <h1 className="font-bold -mb-1.5 text-xl">{book?.title}</h1>
            <h1>{book?.author}</h1>
          </div>
        </Link>
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="font-semibold text-lg text-right">${book?.price}</h1>
            <XMark
              className="w-4 ml-auto cursor-pointer"
              onClick={() => dispatch(removeEntireQuantityFromCart(bookId))}
            />
          </div>
          <div className="flex items-center border border-black justify-between px-2 mt-auto">
            <MinusIcon
              className="w-4 mr-2 cursor-pointer"
              onClick={() => dispatch(decrementQuantity(bookId))}
            />
            <h1 className="border-x border-black px-2">{quantity}</h1>
            <PlusIcon
              className="w-4 ml-2 cursor-pointer"
              onClick={() => dispatch(incrementQuantity(bookId))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCartRow;
