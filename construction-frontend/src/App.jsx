import React from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const styles = {
    rootCanvas: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20 text-[#0F172A]"
  };

  return (
    <div className={styles.rootCanvas}>
      {/* Primary Structural Routing Engine */}
      <AppRoutes />
    </div>
  );
}

export default App;