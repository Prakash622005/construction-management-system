import React, { useEffect } from "react";

const Toast = ({ message, details, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles = {
    wrapper: "fixed top-6 right-6 z-50 transform transition-all duration-300 ease-out animate-slide-in",
    card: "flex flex-col gap-2 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-h)] p-5 rounded-xl shadow-xl min-w-[320px] max-w-sm relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-green-500",
    headerRow: "flex items-center gap-3",
    iconWrapper: "w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-sm font-bold shrink-0",
    messageText: "text-sm font-bold tracking-wide flex-1 text-[var(--text-h)]",
    closeBtn: "text-[var(--text)]/40 hover:text-[var(--text-h)] transition-colors duration-200 text-xs font-bold cursor-pointer ml-2",
    detailsBox: "mt-1 pl-10 flex flex-col gap-1 text-xs text-[var(--text)]/80 font-mono"
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* Header Summary Row */}
        <div className={styles.headerRow}>
          <div className={styles.iconWrapper}>✓</div>
          <p className={styles.messageText}>{message}</p>
          <button onClick={onClose} className={styles.closeBtn}>✕</button>
        </div>

        {/* Dynamic Meta Metadata Panel Block */}
        {details && (
          <div className={styles.detailsBox}>
            <p><span className="opacity-60">ID:</span> {details.appointmentId}</p>
            <p>
              <span className="opacity-60">Status:</span>{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">{details.status}</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Toast;