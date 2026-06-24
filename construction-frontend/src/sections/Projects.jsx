import React from "react";
import ProjectsSection from "../components/home/ProjectsSection";

const Projects = () => {
  const styles = {
    pageContainer: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20",
    innerWrapper: "pt-20 md:pt-24 pb-12"
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerWrapper}>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;