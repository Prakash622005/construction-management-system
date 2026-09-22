import React from "react";
import companyData from "../../constants/companyData";

const WhyChooseUs = () => {

  const styles = {
    // Shifting from bright white to your deep theme background
    section:
      "py-24 bg-[#0F172A] relative overflow-hidden border-t border-white/5",

    container:
      "max-w-7xl mx-auto px-6 relative z-10",

    // Upgraded heading with a premium metallic/blue gradient text fill
    heading:
      "text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-white via-[#F8FAFC] to-[#3B82F6] bg-clip-text text-transparent mb-4 tracking-wide uppercase",

    subHeading:
      "text-center text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium text-base md:text-lg",

    grid:
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",

    // Glassmorphism design with border lighting and high-end hover lift
    card:
      "bg-[#1E293B]/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 group hover:border-blue-500/40",

    // Icon circle with a softer dark container that glows royal blue on card hover
    icon:
      "w-16 h-16 rounded-2xl bg-[#0F172A] border border-white/5 text-blue-400 flex items-center justify-center text-3xl mb-6 shadow-inner transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent",

    title:
      "text-lg font-bold text-slate-200 tracking-wide transition-colors duration-300 group-hover:text-white"
  };

  const icons = [
    "👷",
    "💰",
    "🏗️",
    "⏱️",
    "📐",
    "🤝",
    "🛠️",
    "💎"
  ];

  return (

    <section
      id="why-us"
      className={styles.section}
    >
      {/* Dynamic background ambient glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className={styles.container}>

        <h2 className={styles.heading}>
          Why Choose Skyline Design & Construction?
        </h2>

        <p className={styles.subHeading}>
          We combine experience, innovation, and quality workmanship
          to deliver construction projects that exceed expectations.
        </p>

        <div className={styles.grid}>

          {companyData.whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={styles.card}
            >

              <div className={styles.icon}>
                {icons[index]}
              </div>

              <h3 className={styles.title}>
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>

  );

};

export default WhyChooseUs;