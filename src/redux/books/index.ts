import { createSlice, createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import booksData, { Book } from "../../mocks/books.mock";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: booksData, // this would normally be set upon an initial fetch from DB and handled w a THUNKKKKKK
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const getBookById = createSelector(
  (state: RootState) => state.books.books,
  (_: RootState, bookId: number) => bookId,
  /**
   * This O(n) lookup is fine because the number of books is small.
   * In a production app, something similar to React Query would be used to cache the results of the initially fetch for roughly 0(1) lookups.
   */
  (books, bookId) => books.find((book: Book) => book.id === bookId)
);

export default booksSlice.reducer;
