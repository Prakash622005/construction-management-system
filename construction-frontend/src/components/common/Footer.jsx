import React from "react";
import companyData from "../../constants/companyData";

const Footer = () => {
  const styles = {
    footer: "bg-[#0F172A] text-[#F8FAFC]/90 py-12 border-t border-white/5",
    container: "max-w-7xl mx-auto px-6 flex flex-col items-center text-center", // Added cross-axis and text centering
    companyName: "text-2xl font-bold mb-3 text-white tracking-wide",
    address: "mb-6 text-[#F8FAFC]/70 max-w-md leading-relaxed text-sm",
    // Converted to a responsive horizontal wrap row on large viewports, stacking neatly on mobile
    infoGroup: "flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-y-2 gap-x-8 mb-8 text-sm",
    label: "font-semibold text-[#3B82F6] mr-1",
    value: "text-[#F8FAFC]/80",
    divider: "w-full border-white/10 mb-6", // Forced full canvas width bounds
    copyright: "text-center text-xs text-[#F8FAFC]/50 tracking-wider"
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Company Identity */}
        <div>
          <h2 className={styles.companyName}>
            {companyData.companyName}
          </h2>
          <p className={styles.address}>
            {companyData.address}
          </p>
        </div>

        {/* Technical & Contact Metrics Row */}
        <div className={styles.infoGroup}>
          <p>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{companyData.email}</span>
          </p>

          <p>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>{companyData.phone}</span>
          </p>

          <p>
            <span className={styles.label}>Working Hours:</span>
            <span className={styles.value}>{companyData.workingHours}</span>
          </p>
        </div>

        <hr className={styles.divider} />

        {/* Copyright Notice */}
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()}{" "}
          {companyData.companyName}. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;