import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";

function App() {
  const [page, setPage] = useState("Dashboard");

  if (page === "Books") {
    return <Books />;
  }

  return (
    <DashboardWithNavigation
      onNavigate={setPage}
    />
  );
}

type DashboardWithNavigationProps = {
  onNavigate: (page: string) => void;
};

function DashboardWithNavigation({
  onNavigate,
}: DashboardWithNavigationProps) {
  return (
    <DashboardNavigationBridge onNavigate={onNavigate} />
  );
}

function DashboardNavigationBridge({
  onNavigate,
}: DashboardWithNavigationProps) {
  return <Dashboard onNavigate={onNavigate} />;
}

export default App;