import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const stats = [
  {
    title: "Total Books",
    value: "12,480",
    change: "+8.2%",
    description: "from last month",
    icon: "▤",
  },
  {
    title: "Active Members",
    value: "2,847",
    change: "+5.4%",
    description: "from last month",
    icon: "♙",
  },
  {
    title: "Books Borrowed",
    value: "1,284",
    change: "+12.8%",
    description: "from last month",
    icon: "↗",
  },
  {
    title: "Overdue Books",
    value: "86",
    change: "-4.1%",
    description: "from last month",
    icon: "◷",
  },
];

const recentBooks = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "Design",
    status: "Available",
    statusClass: "available",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    status: "Borrowed",
    statusClass: "borrowed",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    status: "Available",
    statusClass: "available",
  },
  {
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    category: "Technology",
    status: "Borrowed",
    statusClass: "borrowed",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    status: "Available",
    statusClass: "available",
  },
];

const activities = [
  {
    initials: "AS",
    name: "Arjun Sharma",
    action: "borrowed",
    book: "Clean Code",
    time: "12 minutes ago",
  },
  {
    initials: "PK",
    name: "Priya Kumar",
    action: "returned",
    book: "Atomic Habits",
    time: "35 minutes ago",
  },
  {
    initials: "RK",
    name: "Rahul Kumar",
    action: "registered as a new member",
    book: "",
    time: "1 hour ago",
  },
  {
    initials: "NS",
    name: "Neha Singh",
    action: "borrowed",
    book: "Artificial Intelligence",
    time: "2 hours ago",
  },
];

function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="app-shell">
      <Sidebar
        activeItem={activeItem}
        onItemChange={setActiveItem}
      />

      <main className="main-content">
        <Topbar activePage={activeItem} />

        <div className="dashboard-content">
          <section className="welcome-section">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h1>Good morning, Manisha 👋</h1>
              <p>
                Here's what's happening with your library today.
              </p>
            </div>

            <button className="primary-button">
              <span>＋</span>
              Add New Book
            </button>
          </section>

          <section className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.title}>
                <div className="stat-card-top">
                  <div className="stat-icon">{stat.icon}</div>

                  <span className="stat-change">
                    {stat.change}
                  </span>
                </div>

                <p className="stat-title">{stat.title}</p>

                <div className="stat-value-row">
                  <h3>{stat.value}</h3>
                </div>

                <p className="stat-description">
                  {stat.description}
                </p>
              </article>
            ))}
          </section>

          <section className="dashboard-grid">
            <article className="panel books-panel">
              <div className="panel-header">
                <div>
                  <h2>Recent Books</h2>
                  <p>Recently added and updated books</p>
                </div>

                <button className="text-button">
                  View all →
                </button>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>BOOK</th>
                      <th>CATEGORY</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentBooks.map((book) => (
                      <tr key={book.title}>
                        <td>
                          <div className="book-info">
                            <div className="book-cover">
                              {book.title.charAt(0)}
                            </div>

                            <div>
                              <strong>{book.title}</strong>
                              <span>{book.author}</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span className="category">
                            {book.category}
                          </span>
                        </td>

                        <td>
                          <span
                            className={`status ${book.statusClass}`}
                          >
                            <span className="status-dot" />
                            {book.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="panel activity-panel">
              <div className="panel-header">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest library activity</p>
                </div>

                <button className="more-button">•••</button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <div className="activity-item" key={`${activity.name}-${activity.time}`}>
                    <div className="activity-avatar">
                      {activity.initials}
                    </div>

                    <div className="activity-content">
                      <p>
                        <strong>{activity.name}</strong>{" "}
                        {activity.action}{" "}
                        {activity.book && (
                          <strong>{activity.book}</strong>
                        )}
                      </p>

                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="bottom-grid">
            <article className="quick-action-card">
              <div className="quick-action-icon">＋</div>

              <div>
                <h3>Add a new book</h3>
                <p>
                  Add books to your library collection and keep
                  your catalog updated.
                </p>
              </div>

              <button>→</button>
            </article>

            <article className="quick-action-card purple">
              <div className="quick-action-icon">♙</div>

              <div>
                <h3>Manage members</h3>
                <p>
                  View members, borrowing history and account
                  activity.
                </p>
              </div>

              <button>→</button>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;