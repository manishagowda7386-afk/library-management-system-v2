import React, { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import BookTable from "../components/books/BookTable";
import BookModal from "../components/books/BookModal";
import { books as initialBooks } from "../data/books";
import type { Book } from "../data/books";

function Books() {
  const [activeItem, setActiveItem] = useState("Books");
  const [bookList, setBookList] = useState<Book[]>(initialBooks);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(bookList.map((book) => book.category))
      ),
    ];
  }, [bookList]);

  const filteredBooks = useMemo(() => {
    const query = search.toLowerCase().trim();

    return bookList.filter((book) => {
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.isbn.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || book.category === category;

      const matchesStatus =
        status === "All" || book.status === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [bookList, search, category, status]);

  const handleNavigation = (item: string) => {
    setActiveItem(item);
  };

  const handleSave = (book: Book) => {
    setBookList((current) => {
      const exists = current.some(
        (currentBook) => currentBook.id === book.id
      );

      if (exists) {
        return current.map((currentBook) =>
          currentBook.id === book.id ? book : currentBook
        );
      }

      return [book, ...current];
    });

    setModalOpen(false);
    setEditingBook(null);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this book?"
    );

    if (!confirmed) {
      return;
    }

    setBookList((current) =>
      current.filter((book) => book.id !== id)
    );
  };

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditingBook(null);
    setModalOpen(true);
  };

  return (
    <div className="app-shell">
      <Sidebar
        activeItem={activeItem}
        onItemChange={handleNavigation}
      />

      <main className="main-content">
        <Topbar activePage="Books" />

        <div className="books-page">
          <section className="books-page-header">
            <div>
              <p className="eyebrow">LIBRARY COLLECTION</p>

              <h1>Books</h1>

              <p>
                Manage your library collection, availability and
                catalog information.
              </p>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={handleAdd}
            >
              <span>＋</span>
              Add New Book
            </button>
          </section>

          <section className="book-summary-grid">
            <article className="book-summary-card">
              <div className="summary-icon">▤</div>

              <div>
                <span>Total books</span>
                <strong>{bookList.length}</strong>
              </div>
            </article>

            <article className="book-summary-card">
              <div className="summary-icon green">✓</div>

              <div>
                <span>Available</span>
                <strong>
                  {
                    bookList.filter(
                      (book) => book.status === "Available"
                    ).length
                  }
                </strong>
              </div>
            </article>

            <article className="book-summary-card">
              <div className="summary-icon orange">↗</div>

              <div>
                <span>Borrowed</span>
                <strong>
                  {
                    bookList.filter(
                      (book) => book.status === "Borrowed"
                    ).length
                  }
                </strong>
              </div>
            </article>

            <article className="book-summary-card">
              <div className="summary-icon purple">♧</div>

              <div>
                <span>Reserved</span>
                <strong>
                  {
                    bookList.filter(
                      (book) => book.status === "Reserved"
                    ).length
                  }
                </strong>
              </div>
            </article>
          </section>

          <section className="books-panel">
            <div className="books-toolbar">
              <div className="books-search">
                <span>⌕</span>

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search by title, author or ISBN..."
                />
              </div>

              <div className="filter-group">
                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item === "All"
                        ? "All categories"
                        : item}
                    </option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                >
                  <option value="All">All statuses</option>
                  <option value="Available">Available</option>
                  <option value="Borrowed">Borrowed</option>
                  <option value="Reserved">Reserved</option>
                </select>
              </div>
            </div>

            <div className="books-results-header">
              <div>
                <strong>Book collection</strong>
                <span>
                  Showing {filteredBooks.length} of{" "}
                  {bookList.length} books
                </span>
              </div>

              <button
                type="button"
                className="clear-filters"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setStatus("All");
                }}
              >
                Clear filters
              </button>
            </div>

            <BookTable
              books={filteredBooks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>
        </div>
      </main>

      {modalOpen && (
        <BookModal
          book={editingBook}
          onClose={() => {
            setModalOpen(false);
            setEditingBook(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default Books;