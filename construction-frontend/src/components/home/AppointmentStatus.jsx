import React, { useState } from "react";
import { getAppointmentStatus } from "../../api/appointmentApi";

const AppointmentStatus = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckStatus = async () => {
    if (!appointmentId.trim()) {
      alert("Please Enter Appointment ID");
      return;
    }

    try {
      setLoading(true);
      const response = await getAppointmentStatus(appointmentId);
      setStatusData(response);
    } catch (error) {
      console.error(error);
      alert("Appointment Not Found");
      setStatusData(null);
    } finally {
      setLoading(false);
    }
  };

  // Helper theme object updated with deep/darkish red tones for REJECTED state
  const statusThemes = {
    CONFIRMED: {
      text: "text-green-600",
      border: "before:bg-green-500"
    },
    REJECTED: {
      text: "text-red-700 font-bold", // ✨ Changed to deep darkish red
      border: "before:bg-red-700"    // ✨ Left border changed to matching darkish red
    },
    PENDING: {
      text: "text-amber-500",
      border: "before:bg-amber-500"
    }
  };

  // Safety layer to handle potential case-mismatches safely
  const currentStatus = statusData?.status?.toUpperCase() || "PENDING";
  const activeTheme = statusThemes[currentStatus] || statusThemes.PENDING;

  const styles = {
    section: "py-24 bg-[#F8FAFC]",
    container: "max-w-3xl mx-auto px-6",
    heading: "text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-3",
    card: "bg-white shadow-xl shadow-[#0F172A]/5 border border-[#E2E8F0] rounded-xl p-8 md:p-10",
    input: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] placeholder-[#0F172A]/40 outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium mb-5",
    checkBtn: "w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/60 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all duration-200 active:scale-[0.99] text-sm tracking-wide cursor-pointer disabled:cursor-not-allowed",
    statusPanel: "mt-8 border border-[#E2E8F0] rounded-xl p-6 md:p-8 bg-[#F8FAFC] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full transition-all duration-300",
    panelTitle: "text-xl font-bold mb-5 text-[#0F172A] border-b border-[#E2E8F0] pb-2 tracking-wide",
    infoRow: "py-2.5 flex flex-col sm:flex-row sm:justify-between border-b border-[#E2E8F0]/60 last:border-none text-sm",
    label: "font-semibold text-[#0F172A]/70",
    value: "text-[#0F172A] font-medium mt-0.5 sm:mt-0"
  };

  return (
    <section id="appointment-status" className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Track Appointment Status
        </h2>

        <div className={styles.card}>
          <input
            type="text"
            placeholder="Enter Appointment ID"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
            className={styles.input}
            disabled={loading}
          />

          <button
            onClick={handleCheckStatus}
            className={styles.checkBtn}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Status"}
          </button>

          {statusData && (
            <div className={`${styles.statusPanel} ${activeTheme.border}`}>
              <h3 className={styles.panelTitle}>
                Appointment Details
              </h3>

              <div className={styles.infoRow}>
                <span className={styles.label}>Appointment ID:</span>
                <span className={styles.value}>{statusData.appointmentId}</span>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.label}>Status:</span>
                <span className={`font-extrabold uppercase tracking-wider ${activeTheme.text}`}>
                  {statusData.status}
                </span>
              </div>

              {/* Conditionally reveal scheduling details or custom notes based on state */}
              {currentStatus === "CONFIRMED" ? (
                <>
                  <div className={styles.infoRow}>
                    <span className={styles.label}>Meeting Date:</span>
                    <span className="text-green-700 font-semibold">{statusData.meetingDate}</span>
                  </div>

                  <div className={styles.infoRow}>
                    <span className={styles.label}>Meeting Time:</span>
                    <span className="text-green-700 font-semibold">{statusData.meetingTime}</span>
                  </div>
                </>
              ) : (
                <div className={styles.infoRow}>
                  <span className={styles.label}>Notes:</span>
                  <span className="text-[#0F172A]/50 italic">
                    {currentStatus === "REJECTED"
                      ? "This appointment request has been rejected."
                      : "Meeting schedule will display here once confirmed."
                    }
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AppointmentStatus;