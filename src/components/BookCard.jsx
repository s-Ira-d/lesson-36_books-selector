export default function BookCard({ book }) {
  return (
    <>
      <h3>{book.title}</h3>
      <h3>{book.author}</h3>
      <p>{book.genre}</p>
      <p>{book.rating}</p>
    </>
  );
}
