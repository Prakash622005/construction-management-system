import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import companyData from "../../constants/companyData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "appointment", label: "Book Appointment" },
    { id: "appointment-status", label: "Track Status" },
    { id: "contact", label: "Contact" }
  ];

  const styles = {
    header: "fixed top-0 left-0 w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-white/5 shadow-lg z-50 transition-all duration-300",
    container: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
    logoSection: "flex items-center gap-4 cursor-pointer group", // Slightly increased gap for structural balance
    logoImg: "w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105", // 🌟 Increased size from w-11 h-11 to w-14 h-14
    companyName: "font-bold text-xl md:text-2xl text-white tracking-wide", // Balanced text alignment scaling
    navMenu: "hidden md:flex items-center gap-8",
    navLink: "text-[#F8FAFC]/80 font-medium text-sm tracking-wide cursor-pointer transition-all duration-200 hover:text-[#3B82F6] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full",
    adminBtn: "text-white bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-md text-sm font-semibold shadow-md shadow-[#3B82F6]/20 transition-all duration-200 active:scale-95 text-center",
    mobileMenuBtn: "md:hidden text-[#F8FAFC]/80 hover:text-white focus:outline-none transition-colors",
    mobileDropdown: "md:hidden absolute top-full left-0 w-full bg-[#0F172A]/98 backdrop-blur-lg border-b border-white/5 shadow-xl flex flex-col px-6 py-4 gap-4 transition-all duration-300 ease-in-out",
    mobileNavLink: "text-[#F8FAFC]/80 font-medium text-base py-2 border-b border-white/5 last:border-none hover:text-[#3B82F6] transition-colors"
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Brand Logo Section */}
        <div className={styles.logoSection}>
          <img
            src={companyData.logo}
            alt="Company Logo"
            className={styles.logoImg}
          />
          <h1 className={styles.companyName}>
            {companyData.companyName}
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.navMenu}>
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className={styles.navLink}
            >
              {item.label}
            </ScrollLink>
          ))}

          <a href="/login" className={styles.adminBtn}>
            Admin
          </a>
        </nav>

        {/* Hamburger Menu Icon for Mobile Devices */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.mobileMenuBtn}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Navigation Menu */}
        {isOpen && (
          <div className={styles.mobileDropdown}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                {item.label}
              </ScrollLink>
            ))}
            <a href="/login" className={styles.adminBtn} onClick={() => setIsOpen(false)}>
              Admin
            </a>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;