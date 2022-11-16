/* eslint-disable no-param-reassign */
import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { Book } from "../../mocks/books.mock";

interface CartState {
  items: { [id: number]: number };
}

const initialState: CartState = {
  items: {},
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.items[action.payload]) {
        state.items[action.payload] += 1;
      } else {
        state.items[action.payload] = 1;
      }
    },
    removeFromCart: (state, action) => {
      if (state.items[action.payload] > 1) {
        state.items[action.payload] -= 1;
      }
    },
    removeEntireQuantityFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    wipeCartState: () => initialState,
  },
});

export const getCartTotal = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.books.books,
  (items, books) => {
    // store found books in hashmap for O(1) lookup instead of O(n) lookup with array.find(). gang gang
    const cachedBooks: { [id: string]: Book } = {};

    return Object.entries(items).reduce((acc, [id, quantity]) => {
      if (!cachedBooks[id]) {
        const foundBook = books.find((book) => book.id === Number(id));
        if (foundBook) cachedBooks[id] = foundBook;
      }

      return acc + cachedBooks[id].price * quantity;
    }, 0);
  }
);

export const getQuantityOfBookId = createSelector(
  (state: RootState) => state.cart.items,
  (_: RootState, idToFind: number) => idToFind,
  (booksIds, idToFind): number => booksIds[idToFind] || 0
);

export const getUniqueBooksInCart = createSelector(
  (state: RootState) => state.cart.items,
  (bookIds) => Object.keys(bookIds)
);

export const {
  addToCart,
  removeFromCart,
  removeEntireQuantityFromCart,
  wipeCartState,
} = booksSlice.actions;

export default booksSlice.reducer;
