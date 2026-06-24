import React from "react";

const ProjectTable = ({
  projects = [],
  onEdit,
  onDelete
}) => {
  const styles = {
    wrapper: "bg-white border border-[#E2E8F0] rounded-xl shadow-md shadow-[#0F172A]/5 overflow-hidden",
    scrollContainer: "overflow-x-auto w-full",
    table: "w-full border-collapse text-left text-sm text-[#0F172A]",
    thead: "bg-[#F8FAFC] border-b border-[#E2E8F0]",
    th: "p-4 font-bold uppercase tracking-wider text-xs text-[#0F172A]/60",
    tr: "border-b border-[#E2E8F0]/60 last:border-none hover:bg-[#F8FAFC]/50 transition-colors duration-150",
    td: "p-4 font-medium text-[#0F172A]/80",
    actionCell: "p-4 flex items-center gap-2.5",
    editBtn: "bg-[#EAB308] hover:bg-[#D9A306] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm shadow-[#EAB308]/10 transition-all duration-200 active:scale-[0.96] cursor-pointer",
    deleteBtn: "bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm shadow-red-600/10 transition-all duration-200 active:scale-[0.96] cursor-pointer"
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          
          {/* Header Layout Grid context mapping headers */}
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Location</th>
              <th className={styles.th}>Completion Date</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>

          {/* Core Structured Data Grid rows summary panel */}
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className={styles.tr}>
                <td className={`${styles.td} font-semibold text-[#0F172A]`}>
                  {project.title}
                </td>

                <td className={styles.td}>
                  {project.location}
                </td>

                <td className={`${styles.td} text-[#0F172A]/60`}>
                  {project.completionDate}
                </td>

                {/* Inline Action Controls Row */}
                <td className={styles.actionCell}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      onEdit(project)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() =>
                      onDelete(project.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ProjectTable;