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
    contentBox: "relative text-center text-white px-6 py-16 md:py-24 md:px-16 w-full max-w-4xl h-96 mx-4 rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden flex flex-col items-center justify-center",
    imageWrapper: "absolute inset-0 w-full h-full z-0",

    // 🌟 Brightness updated here: Increased opacity to 65% on active, added brightness-125
    image: "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out brightness-125",

    // 🌟 Overlay softened here: Changed opacity to lower values (/50 and /60) to let more image light through
    innerOverlay: "absolute inset-0 bg-gradient-to-br from-[#0F172A]/50 via-transparent to-[#0F172A]/60 z-10 mix-blend-multiply",

    textContainer: "relative z-20 select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]", // Added drop-shadow to keep text sharp over brighter images
    heading: "text-4xl md:text-6xl font-extrabold mb-6 tracking-wide uppercase bg-gradient-to-r from-white via-[#F8FAFC] to-[#3B82F6] bg-clip-text text-transparent",
    tagline: "text-lg md:text-2xl font-medium text-[#F8FAFC]/90 tracking-wide max-w-2xl mx-auto leading-relaxed"
  };

  return (
    <section id="home" className={styles.section}>

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
            {companyData.companyName}
          </h1>

          <p className={styles.tagline}>
            {companyData.tagline}
          </p>
        </div>

      </div>

    </section>
  );
};

export default HeroSlider;