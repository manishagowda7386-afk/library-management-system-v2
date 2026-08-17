import React from "react";

type TopbarProps = {
  activePage: string;
};

function Topbar({ activePage }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div>
          <p className="breadcrumb">Library / Overview</p>
          <h2>{activePage}</h2>
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-button" aria-label="Search">
          ⌕
        </button>

        <button className="icon-button notification-button" aria-label="Notifications">
          ♢
          <span className="notification-dot" />
        </button>

        <div className="topbar-divider" />

        <div className="topbar-user">
          <div className="topbar-avatar">MT</div>

          <div className="topbar-user-info">
            <strong>Manisha</strong>
            <span>Admin</span>
          </div>

          <span className="chevron">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;