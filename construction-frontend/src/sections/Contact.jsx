import React from "react";
import ContactSection from "../components/home/ContactSection";

const Contact = () => {
  const styles = {
    pageContainer: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20",
    innerWrapper: "pt-20 md:pt-24"
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerWrapper}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;