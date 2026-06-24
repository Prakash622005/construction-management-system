import React from "react";

const AppointmentCard = ({ appointment, onView, onReject, onDelete }) => {
  const styles = {
    card: "bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-md shadow-[#0F172A]/5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full relative overflow-hidden",
    headerSection: "flex justify-between items-start gap-4 mb-3",
    clientName: "font-bold text-lg text-[#0F172A] tracking-wide line-clamp-1",
    statusBadge: "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm",
    statusPending: "bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20",
    statusSuccess: "bg-green-600/10 text-green-600 border border-green-600/20",
    detailsGroup: "space-y-3 text-sm my-3 border-t border-[#E2E8F0]/50 pt-3 flex-grow",
    infoRow: "flex items-start gap-2 text-[#0F172A]/70 font-medium",
    labelIcon: "text-[#0F172A]/40 text-sm w-4 shrink-0 mt-0.5",

    // Balanced meeting scheduler layout box
    meetingBox: "mt-2 bg-green-600/5 border border-green-600/10 rounded-lg p-2.5 space-y-1 w-full",
    meetingText: "text-green-700 dark:text-green-600 font-semibold text-xs flex items-center gap-1.5",

    // Structured action drawer container group
    actionWrapper: "mt-5 space-y-2",
    viewBtn: "w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-[#3B82F6]/10 transition-all duration-200 active:scale-[0.98] cursor-pointer text-center block",

    // Subdued, mild inline button styles
    secondaryActions: "grid grid-cols-2 gap-2",
    rejectBtn: "bg-amber-600/5 hover:bg-amber-600 border border-amber-600/10 hover:border-amber-600 text-amber-600 hover:text-white py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer text-center",
    deleteBtn: "bg-red-600/5 hover:bg-red-600 border border-red-600/10 hover:border-red-600 text-red-600 hover:text-white py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer text-center"
  };

  return (
    <div className={styles.card}>

      {/* Top Header Section combining Client Name and Dynamic Status Tag */}
      <div className={styles.headerSection}>
        <h3 className={styles.clientName}>
          {appointment.clientName}
        </h3>

        <span
          className={`${styles.statusBadge} ${
            appointment.status === "PENDING" ? styles.statusPending : styles.statusSuccess
          }`}
        >
          {appointment.status}
        </span>
      </div>

      {/* Structured Technical Project Meta Row Fields */}
      <div className={styles.detailsGroup}>
        <div className="flex flex-col gap-1 w-full">
          <div className={styles.infoRow}>
            <span className={styles.labelIcon}>🏗️</span>
            <span>{appointment.constructionType}</span>
          </div>

          {/* Repositioned block clear of layout flow breaks */}
          {appointment.status === "CONFIRMED" && (
            <div className={styles.meetingBox}>
              <p className={styles.meetingText}>
                <span>📅</span> {appointment.meetingDate}
              </p>
              <p className={styles.meetingText}>
                <span>⏰</span> {appointment.meetingTime}
              </p>
            </div>
          )}
        </div>

        <div className={styles.infoRow}>
          <span className={styles.labelIcon}>📍</span>
          <span className="line-clamp-1">{appointment.siteLocation}</span>
        </div>
      </div>

      {/* Primary and Secondary Action Button Layout Area */}
      <div className={styles.actionWrapper}>
        <button
          onClick={() => onView(appointment)}
          className={styles.viewBtn}
        >
          View Details
        </button>

        <div className={styles.secondaryActions}>
          <button
            onClick={() => onReject(appointment.id)}
            className={styles.rejectBtn}
          >
            Reject
          </button>

          <button
            onClick={() => onDelete(appointment.id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  );
};

export default AppointmentCard;