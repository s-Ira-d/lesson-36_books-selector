import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "./booksData";

const initialState = {
  items: initialBooks,

  filters: {
    search: "",
    status: "all",
    genre: "all",
  },
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
    },
    setStatus(state, action) {
      state.filters.status = action.payload;
    },
    setGenre(state, action) {
      state.filters.genre = action.payload;
    },
    clearFilter(state) {
      state.filters.search = "";
      state.filters.status = "all";
      state.filters.genre = "all";
    },
    updateBookStatus(state, action) {
      const { id, status } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.status = status;
      }
    },
  },
});

export const { setSearch, setStatus, setGenre, clearFilter, updateBookStatus } =
  bookSlice.actions;
export default bookSlice.reducer;
