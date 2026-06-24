import React from "react";
import HeroSlider from "../components/home/HeroSlider";

const Home = () => {
  const styles = {
    pageContainer: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20",
    innerWrapper: "pt-16 md:pt-20"
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerWrapper}>
        <HeroSlider />
      </div>
    </div>
  );
};

export default Home;