import { createSelector } from "reselect";

export const selectBook = (state) => state.books.items;

export const selectGenre = (state) => state.books.filters.genre;

export const selectFilter = (state) => state.books.filters;

export const selectSearch = (state) => state.books.filters.search;

export const selectStatus = (state) => state.books.filters.status;

export const selectReadingBooks = createSelector([selectBook], (books) =>
  books.filter((book) => book.status === "reading"),
);

export const selectCompletedBooks = createSelector([selectBook], (books) =>
  books.filter((book) => book.status === "completed"),
);

export const selectWantToReadBooks = createSelector([selectBook], (books) =>
  books.filter((book) => book.status === "wantToRead"),
);

export const selectBooksCount = createSelector(
  [selectBook],
  (books) => books.length,
);

export const selectReadingBooksCount = createSelector(
  [selectReadingBooks],
  (books) => books.length,
);

export const selectCompletedBooksCount = createSelector(
  [selectCompletedBooks],
  (books) => books.length,
);

export const selectWantToReadBooksCount = createSelector(
  [selectWantToReadBooks],
  (books) => books.length,
);

export const selectPagesRead = createSelector([selectCompletedBooks], (books) =>
  books.reduce((total, initial) => total + initial.currentPage, 0),
);

export const selectFilteredBooks = createSelector(
  [selectBook, selectSearch, selectStatus, selectGenre],
  (books, search, status, genre) => {
    const normalaise = search.trim().toLowerCase();
    return books.filter((book) => {
      const matchSearch =
        normalaise === "" ||
        book.title.toLowerCase().includes(normalaise) ||
        book.author.toLowerCase().includes(normalaise);
      const matchesStatus = status === "all" || book.status === status;
      const matchesGenre = genre === "all" || book.genre === genre;
      return matchSearch && matchesStatus && matchesGenre;
    });
  },
);
