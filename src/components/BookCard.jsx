export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card__content">
        <h3 className="book-card__title">{book.title}</h3>

        <p className="book-card__author">{book.author}</p>

        <div className="book-card__info">
          <span className="book-card__genre">{book.genre}</span>
          <span className="book-card__rating">★ {book.rating}</span>
        </div>
      </div>
    </article>
  );
}
