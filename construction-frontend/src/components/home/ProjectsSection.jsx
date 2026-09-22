import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../api/projectApi";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();

      console.log("Projects API Response:", data);
      console.log("Is Array:", Array.isArray(data));

      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    section: "py-24 bg-[#F8FAFC]",
    container: "max-w-7xl mx-auto px-6",
    heading: "text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-3",
    loadingText: "text-center text-lg font-semibold text-[#0F172A]/60 flex items-center justify-center gap-2 animate-pulse",
    noDataText: "text-center text-base font-medium text-[#0F172A]/50 bg-white border border-[#E2E8F0] p-12 rounded-xl shadow-sm max-w-md mx-auto",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    card: "bg-white border border-[#E2E8F0] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full",
    imgWrapper: "relative overflow-hidden group",
    image: "h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105",
    content: "p-6 flex flex-col flex-grow",
    cardTitle: "text-xl font-bold mb-2 text-[#0F172A] tracking-wide line-clamp-1",
    location: "text-sm font-semibold text-[#3B82F6] flex items-center gap-1.5 mb-3 bg-[#3B82F6]/5 px-2.5 py-1 rounded-md w-fit",
    description: "text-[#0F172A]/70 text-sm leading-relaxed line-clamp-3"
  };

  if (loading) {
    return (
      <section id="projects" className={styles.section}>
        <h2 className={styles.loadingText}>
          <span>⚙️</span> Loading Projects...
        </h2>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.heading}>
          Previous Projects
        </h2>

        {projects.length === 0 ? (
          <div className={styles.noDataText}>
            No Projects Available At Present.
          </div>
        ) : (
          <div className={styles.grid}>
            
            {projects.map((project) => (
              <div key={project.id} className={styles.card}>
                
                {/* Visual Media Container with Image Zoom Hover Mechanics */}
                <div className={styles.imgWrapper}>
                  <img
                    src={`http://localhost:8080/uploads/${project.imagePath}`}
                    alt={project.title}
                    className={styles.image}
                  />
                </div>

                {/* Structured Text Metadata Block */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>
                    {project.title}
                  </h3>

                  <div className={styles.location}>
                    <span>📍</span> {project.location}
                  </div>

                  <p className={styles.description}>
                    {project.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;