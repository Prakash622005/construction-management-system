import React from "react";
import companyData from "../../constants/companyData";

const ContactSection = () => {
  const styles = {
    section: "py-24 bg-[#F8FAFC]",
    container: "max-w-5xl mx-auto px-6",
    heading: "text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-3",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",
    // Changed block behaviors to flex links with interaction hover highlights
    contactCard: "bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-md shadow-[#0F172A]/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block cursor-pointer no-underline group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3B82F6] focus-visible:outline-offset-4",
    iconWrapper: "w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-xl mb-4 text-[#3B82F6] transition-colors duration-300 group-hover:bg-[#3B82F6] group-hover:text-white",
    text: "text-[#0F172A] font-medium text-sm break-all max-w-xs group-hover:text-[#2563EB] transition-colors duration-200",
    mapButtonWrapper: "text-center",
    mapButton: "inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all duration-200 active:scale-[0.98]"
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Contact Us
        </h2>

        {/* Structured Grid Layout for Site Field Contact Information */}
        <div className={styles.grid}>

          {/* Interactive Phone Card */}
          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className={styles.contactCard}
            title="Click to dial phone number"
          >
            <div className={styles.iconWrapper}>📞</div>
            <p className={styles.text}>{companyData.phone}</p>
          </a>

          {/* Interactive Email Card */}
          <a
            href={`mailto:${companyData.email}`}
            className={styles.contactCard}
            title="Click to send an email"
          >
            <div className={styles.iconWrapper}>📧</div>
            <p className={styles.text}>{companyData.email}</p>
          </a>

          {/* Interactive Location Card */}
          <a
            href={companyData.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
            title="Click to view on Google Maps"
          >
            <div className={styles.iconWrapper}>📍</div>
            <p className={styles.text}>{companyData.address}</p>
          </a>

        </div>

        {/* CTA Button to Open Maps */}
        <div className={styles.mapButtonWrapper}>
          <a
            href={companyData.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapButton}
          >
            Open Location
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;