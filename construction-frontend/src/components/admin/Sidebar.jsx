import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("construction_token");
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  const styles = {
    sidebar: "w-64 bg-[var(--bg)] border-r border-[var(--border)] text-[var(--text)] min-h-screen p-6 flex flex-col justify-between shadow-xl",
    brandContainer: "mb-10 pb-4 border-b border-[var(--border)]",
    brandHeading: "text-xl font-extrabold tracking-wider uppercase text-[var(--text-h)]",
    navGroup: "space-y-2.5 flex-grow",
    tabActive: "w-full text-left px-4 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg shadow-md transition-all duration-200 text-sm tracking-wide flex items-center gap-3 cursor-pointer",
    tabInactive: "w-full text-left px-4 py-3 bg-[var(--social-bg)] text-[var(--text)] hover:opacity-80 font-medium rounded-lg transition-all duration-200 text-sm tracking-wide flex items-center gap-3 cursor-pointer",
    logoutBtn: "w-full text-left px-4 py-3 bg-red-600/10 hover:bg-red-600 border border-red-500/20 text-red-500 hover:text-white font-semibold rounded-lg transition-all duration-200 text-sm tracking-wide flex items-center gap-3 cursor-pointer mt-auto"
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.brandContainer}>
          <h2 className={styles.brandHeading}>
            Admin Panel
          </h2>
        </div>

        <div className={styles.navGroup}>
          {/* Dashboard Tab */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className={activeTab === "dashboard" ? styles.tabActive : styles.tabInactive}
          >
            <span>📊</span>
            Dashboard
          </button>

          {/* Appointments Tab */}
          <button
            onClick={() => setActiveTab("appointments")}
            className={activeTab === "appointments" ? styles.tabActive : styles.tabInactive}
          >
            <span>📅</span>
            Appointments
          </button>

          {/* Statistics Tab */}
          <button
            onClick={() => setActiveTab("statistics")}
            className={activeTab === "statistics" ? styles.tabActive : styles.tabInactive}
          >
            <span>📈</span>
            Statistics
          </button>

          {/* Projects Tab — Cleaned up syntax error nesting */}
          <button
            onClick={() => setActiveTab("projects")}
            className={activeTab === "projects" ? styles.tabActive : styles.tabInactive}
          >
            <span>🏗️</span>
            Projects
          </button>
        </div>
      </div>

      {/* Logout Action Trigger */}
      <button onClick={handleLogout} className={styles.logoutBtn}>
        <span>🚪</span>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;