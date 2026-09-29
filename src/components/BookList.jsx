import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectBook, selectFilteredBooks } from "../redux/booksSelectors";

export default function BookList() {
  const books = useSelector(selectFilteredBooks);

  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
}
