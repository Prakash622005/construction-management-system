import React, { useEffect, useState } from "react";
import companyData from "../../constants/companyData";

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === companyData.heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    section: "h-screen relative flex items-center justify-center bg-[#0F172A] overflow-hidden",
    contentBox: "relative mt-12 text-center text-white px-6 py-16 md:py-24 md:px-16 w-full max-w-4xl h-96 mx-4 rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden flex flex-col items-center justify-center",
    imageWrapper: "absolute inset-0 w-full h-full z-0",
    image: "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out brightness-175",
    innerOverlay: "absolute inset-0 bg-gradient-to-br from-[#0F172A]/50 via-transparent to-[#0F172A]/60 z-10 mix-blend-multiply",

    textContainer: "relative z-20 select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] w-full flex flex-col items-center justify-center",

    // 🌟 FIXED: Removed text-transparent and bg-clip-text, changed color to solid text-white
    heading: "text-2xl md:text-4xl font-extrabold mb-6 tracking-wide uppercase text-white flex flex-wrap justify-center items-center gap-y-2",
    tagline: "text-lg md:text-2xl font-medium text-[#F8FAFC]/90 tracking-wide max-w-2xl mx-auto leading-relaxed"
  };

  const renderAnimatedName = (name) => {
    return name.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index} className="w-3 md:w-5 inline-block" />;
      }

      const animations = [
        "slider-fly-up",
        "slider-fly-down",
        "slider-fly-left",
        "slider-fly-right"
      ];
      const assignedAnim = animations[index % animations.length];

      return (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `${assignedAnim} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards, slider-glow-pulse 3s ease-in-out infinite alternate`,
            animationDelay: `${index * 50}ms, 1200ms`,
            opacity: 0,
            // 🌟 ADDED: A soft gradient effect per letter without utilizing background-clip breaks
            color: index % 3 === 0 ? "#3B82F6" : "#FFFFFF"
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section id="home" className={styles.section}>
      <style>{`
        @keyframes slider-fly-up {
          0% { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes slider-fly-down {
          0% { opacity: 0; transform: translateY(-30px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes slider-fly-left {
          0% { opacity: 0; transform: translateX(-40px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes slider-fly-right {
          0% { opacity: 0; transform: translateX(40px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes slider-glow-pulse {
          0% { filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.4)); }
          100% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.9)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.5)); }
        }
        @keyframes slider-fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 0.9; transform: translateY(0); }
        }
      `}</style>

      <div className={styles.contentBox}>
        <div className={styles.imageWrapper}>
          {companyData.heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Construction Slide ${index + 1}`}
              className={`${styles.image} ${
                index === currentImage ? "opacity-65 scale-105" : "opacity-0 scale-100"
              }`}
            />
          ))}
        </div>

        <div className={styles.innerOverlay} />

        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            {renderAnimatedName(companyData.companyName)}
          </h1>

          <p
            className={styles.tagline}
            style={{
              animation: "slider-fade-in 1s ease-out forwards",
              animationDelay: "1000ms",
              opacity: 0
            }}
          >
            {companyData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;