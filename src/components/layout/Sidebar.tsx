import React from "react";

type SidebarProps = {
  activeItem: string;
  onItemChange: (item: string) => void;
};

const menuItems = [
  {
    label: "Dashboard",
    icon: "▦",
  },
  {
    label: "Books",
    icon: "▤",
  },
  {
    label: "Members",
    icon: "♙",
  },
  {
    label: "Borrowed",
    icon: "↗",
  },
  {
    label: "Returns",
    icon: "↙",
  },
];

const secondaryItems = [
  {
    label: "Analytics",
    icon: "◔",
  },
  {
    label: "Settings",
    icon: "⚙",
  },
];

function Sidebar({ activeItem, onItemChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <span>LN</span>
        </div>

        <div>
          <h1>Library Nexus</h1>
          <p>Management System</p>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">MAIN MENU</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${
                activeItem === item.label ? "active" : ""
              }`}
              onClick={() => onItemChange(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-section secondary-menu">
        <p className="sidebar-heading">SYSTEM</p>

        <nav>
          {secondaryItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${
                activeItem === item.label ? "active" : ""
              }`}
              onClick={() => onItemChange(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon">✦</div>

          <div>
            <strong>Library Pro</strong>
            <p>Advanced management tools</p>
          </div>

          <button>→</button>
        </div>

        <div className="profile-card">
          <div className="profile-avatar">MT</div>

          <div className="profile-info">
            <strong>Manisha Tech</strong>
            <span>Administrator</span>
          </div>

          <span className="profile-menu">•••</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;