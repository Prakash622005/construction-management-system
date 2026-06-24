import React, { useState } from "react";
import { confirmAppointment } from "../../api/appointmentApi";

const AppointmentModal = ({ appointment, onClose }) => {
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  if (!appointment) return null;

  const handleConfirm = async () => {
    try {
      await confirmAppointment(appointment.id, { meetingDate, meetingTime });
      alert("Appointment Confirmed Successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed To Confirm Appointment");
    }
  };

  const styles = {
    overlay: "fixed inset-0 bg-[#0F172A]/60 backdrop-blur-sm flex justify-center items-center z-50 p-4",
    modalBox: "bg-white w-full max-w-2xl p-6 md:p-8 rounded-xl shadow-2xl shadow-black/20 border border-[#E2E8F0] max-h-[90vh] overflow-y-auto",
    modalTitle: "text-2xl font-bold mb-6 text-[#0F172A] border-b border-[#E2E8F0] pb-3 tracking-wide",
    infoGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6 bg-[#F8FAFC] p-5 rounded-xl border border-[#E2E8F0]/60",
    infoRow: "flex flex-col gap-1",
    label: "text-[#0F172A]/40 font-bold uppercase tracking-wider text-xs",
    value: "text-[#0F172A] font-semibold text-base break-words",
    fullWidthRow: "sm:col-span-2 flex flex-col gap-1",
    inputSection: "space-y-4 border-t border-[#E2E8F0] pt-5 mt-5",
    sectionLabel: "text-sm font-bold text-[#0F172A] tracking-wide block mb-1",
    input: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium cursor-pointer",
    btnGroup: "flex gap-3 mt-8 border-t border-[#E2E8F0] pt-5",
    confirmBtn: "flex-1 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-green-600/10 transition-all duration-200 active:scale-[0.98] text-center cursor-pointer",
    closeBtn: "bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#0F172A]/70 border border-[#E2E8F0] px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.98] text-center cursor-pointer"
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>
          Appointment Details
        </h2>

        {/* Organized Corporate Meta Data Grid Layout */}
        <div className={styles.infoGrid}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Name</span>
            <span className={styles.value}>{appointment.clientName}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Mobile</span>
            <span className={styles.value}>{appointment.mobile}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{appointment.email}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Type</span>
            <span className={styles.value}>{appointment.constructionType}</span>
          </div>

          <div className={styles.fullWidthRow}>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{appointment.siteLocation}</span>
          </div>

          <div className={styles.fullWidthRow}>
            <span className={styles.label}>Requirements</span>
            <span className="text-[#0F172A]/80 font-medium leading-relaxed bg-white p-3 rounded-lg border border-[#E2E8F0]/40 mt-1">
              {appointment.requirements}
            </span>
          </div>
        </div>

        {/* Administrative Meeting Setup Fields */}
        <div className={styles.inputSection}>
          <div>
            <label className={styles.sectionLabel}>Schedule Meeting Date</label>
            <input
              type="date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.sectionLabel}>Schedule Meeting Time</label>
            <input
              type="time"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        {/* Form Overlay Control Triggers */}
        <div className={styles.btnGroup}>
          <button onClick={handleConfirm} className={styles.confirmBtn}>
            Confirm Appointment
          </button>

          <button onClick={onClose} className={styles.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;