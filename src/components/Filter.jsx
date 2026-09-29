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
    <div>
      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="search author or books"
        type="text"
      />
      <select
        value={status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option value="all">all</option>
        <option value="reading">reading</option>
        <option value="completed">completed</option>
        <option value="wantToRead">wantToRead</option>
      </select>
      <select
        value={genre}
        onChange={(e) => dispatch(setGenre(e.target.value))}
      >
        {genres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={() => dispatch(clearFilter())}>Clear</button>
    </div>
  );
}
