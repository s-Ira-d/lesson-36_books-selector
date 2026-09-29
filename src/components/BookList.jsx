import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectFilteredBooks } from "../redux/booksSelectors";

export default function BookList() {
  const books = useSelector(selectFilteredBooks);

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}
