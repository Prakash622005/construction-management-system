import React from "react";
import AppointmentForm from "../components/home/AppointmentForm";

const Appointment = () => {
  const styles = {
    pageContainer: "min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-[#3B82F6]/20",
    innerWrapper: "pt-20 md:pt-24"
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerWrapper}>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Appointment;