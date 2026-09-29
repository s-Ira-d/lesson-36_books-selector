import { useSelector } from "react-redux";
import {
  selectBooksCount,
  selectCompletedBooksCount,
  selectPagesRead,
  selectReadingBooksCount,
  selectWantToReadBooksCount,
} from "../redux/booksSelectors";

export const ReadingStatus = () => {
  const booksCount = useSelector(selectBooksCount);
  const booksReading = useSelector(selectReadingBooksCount);
  const booksCompleted = useSelector(selectCompletedBooksCount);
  const booksWantToRead = useSelector(selectWantToReadBooksCount);
  const booksPagesRead = useSelector(selectPagesRead);

  return (
    <aside className="reading-status">
      <p className="reading-status__label">MY READING</p>

      <h1 className="reading-status__total">{booksCount}</h1>
      <p className="reading-status__books">books</p>

      <div className="reading-status__item">
        <span>Reading</span>
        <strong>{booksReading}</strong>
      </div>

      <div className="reading-status__item">
        <span>Completed</span>
        <strong>{booksCompleted}</strong>
      </div>

      <div className="reading-status__item">
        <span>Want to read</span>
        <strong>{booksWantToRead}</strong>
      </div>

      <div className="reading-status__item">
        <span>Pages read</span>
        <strong>{booksPagesRead}</strong>
      </div>
    </aside>
  );
};
