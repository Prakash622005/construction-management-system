import React from "react";

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const styles = {
    card: "bg-white border border-[#E2E8F0] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full",
    imgWrapper: "relative overflow-hidden group",
    image: "w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105",
    content: "p-6 flex flex-col flex-grow",
    title: "text-xl font-bold mb-2 text-[#0F172A] tracking-wide line-clamp-1",
    location: "text-sm font-semibold text-[#3B82F6] flex items-center gap-1.5 mb-3 bg-[#3B82F6]/5 px-2.5 py-1 rounded-md w-fit",
    description: "text-[#0F172A]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow",
    dateWrapper: "text-xs font-medium text-[#0F172A]/50 border-t border-[#E2E8F0] pt-4 mb-5 flex justify-between items-center",
    dateLabel: "uppercase tracking-wider font-semibold text-[#0F172A]/40",
    dateValue: "text-[#0F172A]/80 font-bold",
    btnGroup: "flex gap-3",
    editBtn: "flex-1 bg-[#EAB308] hover:bg-[#D9A306] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-[#EAB308]/10 transition-all duration-200 active:scale-[0.97] text-center cursor-pointer",
    deleteBtn: "flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-red-600/10 transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
  };

  return (
    <div className={styles.card}>
      {/* Structural Image Wrapper with smooth Zoom interaction effects */}
      <div className={styles.imgWrapper}>
        <img
          src={`http://localhost:8080/uploads/${project.imagePath}`}
          alt={project.title}
          className={styles.image}
        />
      </div>

      {/* Meta Content Layout Block */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {project.title}
        </h3>

        <div className={styles.location}>
          <span>📍</span> {project.location}
        </div>

        <p className={styles.description}>
          {project.description}
        </p>

        {/* Structured Technical Metric Footer */}
        <div className={styles.dateWrapper}>
          <span className={styles.dateLabel}>Completion Date</span>
          <span className={styles.dateValue}>{project.completionDate}</span>
        </div>

        {/* Action Controls Group */}
        <div className={styles.btnGroup}>
          <button
            onClick={() => onEdit(project)}
            className={styles.editBtn}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(project.id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;