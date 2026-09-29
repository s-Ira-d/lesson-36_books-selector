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
    <>
      <h1>MY READING</h1>
      <p>{booksCount} books</p>
      <h2>Reading</h2>
      <p>{booksReading}</p>
      <h2>Completed</h2>
      <p>{booksCompleted}</p>
      <h2>Want to read</h2>
      <p>{booksWantToRead}</p>
      <h2>Pages read</h2>
      <p>{booksPagesRead}</p>
    </>
  );
};
