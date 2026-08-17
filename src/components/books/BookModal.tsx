import React, { useEffect, useState } from "react";
import type { Book, BookStatus } from "../../data/books";

type BookModalProps = {
  book: Book | null;
  onClose: () => void;
  onSave: (book: Book) => void;
};

function BookModal({ book, onClose, onSave }: BookModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Programming");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const [copies, setCopies] = useState("");
  const [available, setAvailable] = useState("");
  const [status, setStatus] =
    useState<BookStatus>("Available");

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setCategory(book.category);
      setIsbn(book.isbn);
      setYear(String(book.year));
      setCopies(String(book.copies));
      setAvailable(String(book.available));
      setStatus(book.status);
    } else {
      setTitle("");
      setAuthor("");
      setCategory("Programming");
      setIsbn("");
      setYear("");
      setCopies("");
      setAvailable("");
      setStatus("Available");
    }
  }, [book]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newBook: Book = {
      id: book?.id ?? Date.now(),
      title: title.trim() || "Untitled Book",
      author: author.trim() || "Unknown Author",
      category,
      isbn: isbn.trim() || "Not provided",
      year: Number(year) || new Date().getFullYear(),
      copies: Number(copies) || 1,
      available: Number(available) || 0,
      status,
    };

    onSave(newBook);
  };

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div
        className="book-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">
              {book ? "EDIT COLLECTION" : "NEW COLLECTION"}
            </p>

            <h2>{book ? "Edit book" : "Add a new book"}</h2>

            <p>
              {book
                ? "Update the information for this book."
                : "Add a book to your library catalog."}
            </p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Book title
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter book title"
                required
              />
            </label>

            <label>
              Author
              <input
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Enter author name"
                required
              />
            </label>

            <label>
              Category
              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
              >
                <option>Programming</option>
                <option>Technology</option>
                <option>Machine Learning</option>
                <option>Computer Science</option>
                <option>Design</option>
                <option>Database</option>
                <option>Networking</option>
                <option>Self Development</option>
              </select>
            </label>

            <label>
              ISBN
              <input
                value={isbn}
                onChange={(event) => setIsbn(event.target.value)}
                placeholder="9780132350884"
              />
            </label>

            <label>
              Publication year
              <input
                type="number"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                placeholder="2024"
              />
            </label>

            <label>
              Total copies
              <input
                type="number"
                min="1"
                value={copies}
                onChange={(event) =>
                  setCopies(event.target.value)
                }
                placeholder="10"
              />
            </label>

            <label>
              Available copies
              <input
                type="number"
                min="0"
                value={available}
                onChange={(event) =>
                  setAvailable(event.target.value)
                }
                placeholder="8"
              />
            </label>

            <label>
              Status
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as BookStatus)
                }
              >
                <option value="Available">Available</option>
                <option value="Borrowed">Borrowed</option>
                <option value="Reserved">Reserved</option>
              </select>
            </label>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="primary-button">
              {book ? "Save changes" : "Add book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookModal;