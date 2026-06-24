import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      /*
        Backend API Integration Example:

        const response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials)
        });

        if (response.ok) { ... }
      */

      console.log(credentials);
      // Simulating a minor network pause for better interaction response feedback
      setTimeout(() => {
        setLoading(false);
        navigate("/admin");
      }, 600);

    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  const styles = {
    pageWrapper: "min-h-screen flex justify-center items-center bg-[#F8FAFC] px-4 font-sans antialiased",
    loginCard: "bg-white border border-[#E2E8F0] p-8 md:p-10 rounded-xl shadow-xl shadow-[#0F172A]/5 w-full max-w-md",
    heading: "text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-2",
    formGroup: "space-y-5",
    input: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] placeholder-[#0F172A]/40 outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium",
    submitBtn: "w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/60 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all duration-200 active:scale-[0.99] text-sm tracking-wide cursor-pointer text-center disabled:cursor-not-allowed",
    // Fixed: Added definition for homeBtn style targeting a clean secondary link look
    homeBtn: "w-full block text-center text-sm font-semibold text-[#0F172A]/60 hover:text-[#3B82F6] transition-colors duration-200 cursor-pointer pt-2"
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginCard}>

        <h2 className={styles.heading}>
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={loading}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className={styles.homeBtn}
            disabled={loading}
          >
            ← Return to Home
          </button>
        </form> {/* Fixed: Form tag is now properly closed here */}

      </div>
    </div>
  );
};

export default LoginPage;