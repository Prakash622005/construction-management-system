import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AdminDashboard from "../pages/AdminDashboard";

const AppRoutes = () => {
  const styles = {
    appWrapper: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20"
  };

  return (
    <div className={styles.appWrapper}>
      <BrowserRouter>
        <Routes>
          
          {/* Public Client Marketing Shell Gateway */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Secure Administrative Login Screen Portal */}
          <Route
            path="/login"
            element={<LoginPage />}
          />

          {/* Secure Administrative Dashboard Command Viewport */}
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;