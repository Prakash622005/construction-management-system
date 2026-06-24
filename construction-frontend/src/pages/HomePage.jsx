import React from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AppointmentStatus from "../components/home/AppointmentStatus";

import HeroSlider from "../components/home/HeroSlider";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import AppointmentForm from "../components/home/AppointmentForm";
import ContactSection from "../components/home/ContactSection";

const HomePage = () => {
  const styles = {
    mainCanvas: "bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans antialiased selection:bg-[#3B82F6]/20",
    sectionWrapper: "space-y-0 relative"
  };

  return (
    <div className={styles.mainCanvas}>
      {/* Global Application Header Navigation Bar */}
      <Header />

      {/* Main Structural Layout Viewport Page Flow */}
      <main className={styles.sectionWrapper}>
        {/* Dynamic Marketing Slideshow Cover */}
        <HeroSlider />

        {/* Corporate Overview and Business Background Info Section */}
        <AboutSection />

        {/* Client Success Metrics and Analytics Counter Banner */}
        <StatsSection />

        {/* Finished Commercial and Residential Architectural Gallery */}
        <ProjectsSection />

        {/* Main Client Appointment Intake and Dynamic Request Form */}
        <AppointmentForm />

        {/* Real-time Appointment Registration Status Tracker Verification Widget */}
        <AppointmentStatus />

        {/* Geographic Map Locator, Contact Forms, and Details Panel */}
        <ContactSection />
      </main>

      {/* Global Application Base Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;