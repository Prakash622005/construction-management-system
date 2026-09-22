import React from "react";
import companyData from "../../constants/companyData";

const ContactSection = () => {
  const styles = {
    section: "py-24 bg-[#F8FAFC]",
    container: "max-w-5xl mx-auto px-6",
    heading:
      "text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-3",

    grid:
      "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",

    contactCard:
      "bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-md shadow-[#0F172A]/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 no-underline group",

    iconWrapper:
      "w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-xl mb-4 text-[#3B82F6] transition-all duration-300 group-hover:bg-[#3B82F6] group-hover:text-white",

    text:
      "text-[#0F172A] font-medium text-sm leading-7",

    mapButtonWrapper:
      "text-center",

    mapButton:
      "inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all duration-200"
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Contact Us
        </h2>

        <div className={styles.grid}>

          {/* Phone Numbers */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>📞</div>

            <div className={styles.text}>
              {companyData.phone.map((number, index) => (
                <div key={index}>
                  <a
                    href={`tel:${number.replace(/\s/g, "")}`}
                    className="hover:text-[#2563EB]"
                  >
                    {number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <a
            href={`mailto:${companyData.email}`}
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>📧</div>

            <p className={styles.text}>
              {companyData.email}
            </p>
          </a>

          {/* Address */}
          <a
            href={companyData.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>📍</div>

            <p className={styles.text}>
              {companyData.address}
            </p>
          </a>

        </div>

{/*         <div className={styles.mapButtonWrapper}> */}
{/*           <a */}
{/*             href={companyData.googleMapLink} */}
{/*             target="_blank" */}
{/*             rel="noopener noreferrer" */}
{/*             className={styles.mapButton} */}
{/*           > */}
{/*             Open Location */}
{/*           </a> */}
{/*         </div> */}

      </div>
    </section>
  );
};

export default ContactSection;