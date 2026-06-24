import React from "react";
import companyData from "../../constants/companyData";

const AboutSection = () => {
  const styles = {
    section: "py-24 bg-[#F8FAFC] relative overflow-hidden",
    container: "max-w-5xl mx-auto px-6 relative z-10",
    card: "bg-white rounded-xl p-8 md:p-12 shadow-xl shadow-[#0F172A]/5 border border-[#E2E8F0] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-[#3B82F6]",
    heading: "text-3xl md:text-4xl font-extrabold mb-8 text-[#0F172A] tracking-wide relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-[#3B82F6] after:mt-2",
    text: "text-[#0F172A]/80 text-base md:text-lg leading-relaxed text-justify md:text-center font-medium",
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        
        {/* Content Wrapped inside an Enterprise Data Card Layout */}
        <div className={styles.card}>
          <div className="text-center">
            <h2 className={styles.heading}>
              About Us
            </h2>
          </div>

          <p className={styles.text}>
            {companyData.about}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;