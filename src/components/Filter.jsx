import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  setGenre,
  setSearch,
  setStatus,
} from "../redux/bookSlice";
import {
  selectGenre,
  selectSearch,
  selectStatus,
} from "../redux/booksSelectors";

const genres = ["all", "Fantasy", "Drama", "Sci-Fi", "Romance", "Dystopia"];

export function Filter() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const status = useSelector(selectStatus);
  const genre = useSelector(selectGenre);

  return (
    <div className="filter">
      <input
        className="filter__search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search books or authors..."
        type="text"
      />

      <select
        className="filter__select"
        value={status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option value="all">All books</option>
        <option value="reading">Reading</option>
        <option value="completed">Completed</option>
        <option value="wantToRead">Want to read</option>
      </select>

      <select
        className="filter__select"
        value={genre}
        onChange={(e) => dispatch(setGenre(e.target.value))}
      >
        {genres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        className="filter__button"
        onClick={() => dispatch(clearFilter())}
      >
        Clear
      </button>
    </div>
  );
}
