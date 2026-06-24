import React, { useState } from "react";
import { createAppointment } from "../../api/appointmentApi";
import Toast from "../common/Toast";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    mobile: "",
    email: "",
    constructionType: "",
    siteSize: "",
    siteLocation: "",
    requirements: ""
  });

  // Updated state structure initialization to safely include details
  const [toast, setToast] = useState({ show: false, message: "", details: null });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await createAppointment(formData);

      setToast({
        show: true,
        message: "Appointment Booked Successfully",
        details: {
          appointmentId: response.appointmentId,
          status: response.status
        }
      });

      setFormData({
        clientName: "",
        mobile: "",
        email: "",
        constructionType: "",
        siteSize: "",
        siteLocation: "",
        requirements: ""
      });
    } catch (error) {
      console.error(error);
      alert("Failed To Book Appointment");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    section: "py-24 bg-[#F8FAFC]",
    container: "max-w-3xl mx-auto px-6",
    heading: "text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A] tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#3B82F6] after:mx-auto after:mt-3",
    form: "bg-white p-8 md:p-10 rounded-xl shadow-xl shadow-[#0F172A]/5 border border-[#E2E8F0] space-y-6",
    input: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] placeholder-[#0F172A]/40 outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium",
    select: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium cursor-pointer",
    textarea: "w-full border border-[#E2E8F0] bg-[#F8FAFC]/50 p-3.5 rounded-lg text-[#0F172A] placeholder-[#0F172A]/40 outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:ring-2 focus:ring-[#3B82F6]/10 text-sm font-medium resize-none",
    submitBtn: "w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/60 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all duration-200 active:scale-[0.99] text-sm tracking-wide cursor-pointer disabled:cursor-not-allowed"
  };

  return (
    <section id="appointment" className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            placeholder="Full Name"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <select
            name="constructionType"
            value={formData.constructionType}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select Construction Type</option>
            <option value="HOUSE">House</option>
            <option value="SHOP">Shop</option>
            <option value="APARTMENT">Apartment</option>
            <option value="OFFICE">Office</option>
            <option value="OTHER">Other</option>
          </select>

          <input
            type="text"
            name="siteSize"
            value={formData.siteSize}
            placeholder="Site Size"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="text"
            name="siteLocation"
            value={formData.siteLocation}
            placeholder="Site Location"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <textarea
            rows="5"
            name="requirements"
            value={formData.requirements}
            placeholder="Project Requirements"
            onChange={handleChange}
            required
            className={styles.textarea}
          />

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>

      </div>

      {/* Added the layout render target block here */}
      {toast.show && (
        <Toast
          message={toast.message}
          details={toast.details}
          onClose={() => setToast({ show: false, message: "", details: null })}
        />
      )}
    </section>
  );
};

export default AppointmentForm;