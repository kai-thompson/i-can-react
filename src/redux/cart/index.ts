import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { Book } from "../../mocks/books.mock";

interface CartState {
  bookIds: number[];
}

const initialState: CartState = {
  bookIds: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.bookIds.push(action.payload);
    },
    wipeCartState: () => initialState,
  },
});

export const getCartTotal = createSelector(
  (state: RootState) => state.cart.bookIds,
  (state: RootState) => state.books.books,
  (bookIds, books) => {
    // store found books in hashmap for O(1) lookup instead of O(n) lookup with array.find(). gang gang
    const cachedBooks: { [id: number]: Book } = {};

    let totalPrice = 0;
    for (const bookId of bookIds) {
      if (cachedBooks[bookId]) {
        totalPrice += cachedBooks[bookId].price;
      } else {
        const foundBook = books.find((book: Book) => book.id === bookId);
        if (foundBook) {
          totalPrice += foundBook.price;
          cachedBooks[bookId] = foundBook;
        }
      }
    }

    return totalPrice;
  }
);

export const getQuantityOfBookId = createSelector(
  (state: RootState) => state.cart.bookIds,
  (_: RootState, idToFind: number) => idToFind,
  (booksIds, idToFind): number =>
    booksIds.reduce((quantity, bookId) => {
      if (bookId === idToFind) {
        return quantity + 1;
      }
      return quantity;
    }, 0)
);

export const { addToCart, wipeCartState } = booksSlice.actions;

export default booksSlice.reducer;
