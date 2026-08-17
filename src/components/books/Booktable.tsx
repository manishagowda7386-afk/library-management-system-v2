import React from "react";
import type { Book } from "../../data/books";

type BookTableProps = {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
};

function BookTable({ books, onEdit, onDelete }: BookTableProps) {
  if (books.length === 0) {
    return (
      <div className="empty-books">
        <div className="empty-books-icon">⌕</div>
        <h3>No books found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="books-table-wrapper">
      <table className="books-table">
        <thead>
          <tr>
            <th>BOOK</th>
            <th>ISBN</th>
            <th>CATEGORY</th>
            <th>YEAR</th>
            <th>AVAILABILITY</th>
            <th>STATUS</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <div className="books-table-title">
                  <div className="books-table-cover">
                    {book.title.charAt(0)}
                  </div>

                  <div>
                    <strong>{book.title}</strong>
                    <span>{book.author}</span>
                  </div>
                </div>
              </td>

              <td>
                <span className="table-muted">{book.isbn}</span>
              </td>

              <td>
                <span className="book-category">
                  {book.category}
                </span>
              </td>

              <td>
                <span className="table-muted">{book.year}</span>
              </td>

              <td>
                <div className="availability">
                  <div className="availability-numbers">
                    <strong>{book.available}</strong>
                    <span>/ {book.copies}</span>
                  </div>

                  <div className="availability-bar">
                    <span
                      style={{
                        width: `${Math.max(
                          8,
                          (book.available / book.copies) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </td>

              <td>
                <span
                  className={`book-status ${book.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <span />
                  {book.status}
                </span>
              </td>

              <td>
                <div className="book-actions">
                  <button
                    type="button"
                    title="Edit book"
                    onClick={() => onEdit(book)}
                  >
                    ✎
                  </button>

                  <button
                    type="button"
                    title="Delete book"
                    className="delete-action"
                    onClick={() => onDelete(book.id)}
                  >
                    ×
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;