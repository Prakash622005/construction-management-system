import React, { useEffect, useState } from "react";
import { getAllProjects, deleteProject } from "../api/projectApi";
import { getAllAppointments } from "../api/appointmentApi";

import Sidebar from "../components/admin/Sidebar";
import DashboardCards from "../components/admin/DashboardCards";
import AppointmentCard from "../components/admin/AppointmentCard";
import AppointmentModal from "../components/admin/AppointmentModal";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectTable from "../components/admin/ProjectTable";
import StatisticsForm from "../components/admin/StatisticsForm";
import {
  rejectAppointment,
  deleteAppointment
} from "../api/appointmentApi";

const AdminDashboard = () => {
  // Fixed: Consolidated and cleaned up duplicate state declarations
  const [activeTab, setActiveTab] = useState("dashboard");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchProjects();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await getAllAppointments();
      setAppointments(response);
    } catch (error) {
      console.error("Failed to fetch appointments", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects();
      setProjects(response);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
  };

  const handleDeleteProject = async (id) => {
    const confirmed = window.confirm("Delete this project?");
    if (!confirmed) return;

    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  // Modernized: Mapped styles object directly to your global Tailwind variables
  const styles = {
    dashboardShell: "flex bg-[var(--bg)] min-h-screen font-sans antialiased selection:bg-[var(--accent)]/20 text-[var(--text)]",
    mainContentArea: "flex-1 p-8 md:p-10 max-h-screen overflow-y-auto",
    pageHeader: "text-2xl md:text-3xl font-extrabold mb-8 text-[var(--text-h)] tracking-wide relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[var(--accent)] after:mt-2",
    loadingState: "text-center text-base font-semibold text-[var(--text)]/50 py-12 animate-pulse flex items-center justify-center gap-2",
    emptyState: "text-center text-sm font-medium text-[var(--text)]/50 bg-[var(--bg)] border border-[var(--border)] p-12 rounded-xl shadow-sm max-w-md mx-auto mt-6",
    appointmentGrid: "grid grid-cols-1 xl:grid-cols-2 gap-6"
  };

  // Analytics Computation Engine Matrix
  const totalAppointments = appointments.length;
  const totalProjects = projects.length;

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status?.toUpperCase() === "PENDING"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status?.toUpperCase() === "CONFIRMED"
  ).length;
const handleRejectAppointment =
  async (id) => {

    const confirmed =
      window.confirm(
        "Reject this appointment?"
      );

    if (!confirmed) return;

    try {

      await rejectAppointment(id);

      fetchAppointments();

      alert(
        "Appointment Rejected Successfully"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Reject Failed"
      );

    }
  };

const handleDeleteAppointment =
  async (id) => {

    const confirmed =
      window.confirm(
        "Delete this appointment?"
      );

    if (!confirmed) return;

    try {

      await deleteAppointment(id);

      fetchAppointments();

      alert(
        "Appointment Deleted Successfully"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Delete Failed"
      );

    }
  };
  return (
    <div className={styles.dashboardShell}>
      {/* Structural Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Dynamic Viewport Grid Content Area */}
      <div className={styles.mainContentArea}>

        {/* Core Administrative Dashboard Analytics Grid Tab Section */}
        {activeTab === "dashboard" && (
          <>
            <h1 className={styles.pageHeader}>Dashboard</h1>
            <DashboardCards
              totalAppointments={totalAppointments}
              pendingAppointments={pendingAppointments}
              confirmedAppointments={confirmedAppointments}
              totalProjects={totalProjects}
            />
          </>
        )}

        {/* Client Appointment Verification Section */}
        {activeTab === "appointments" && (
          <>
            <h1 className={styles.pageHeader}>Appointments</h1>
            {loading ? (
              <div className={styles.loadingState}>
                <span>⚙️</span> Loading Appointments...
              </div>
            ) : appointments.length === 0 ? (
              <div className={styles.emptyState}>
                No Appointments Found At Present.
              </div>
            ) : (
              <div className={styles.appointmentGrid}>
                {appointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onView={setSelectedAppointment}
                    onReject={handleRejectAppointment}
                    onDelete={handleDeleteAppointment}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Statistics Management Interface Component View Tab Section */}
        {activeTab === "statistics" && (
          <>
            <h1 className={styles.pageHeader}>Statistics Management</h1>
            <StatisticsForm />
          </>
        )}

        {/* Architectural Portfolio and Project Media Creation Tab Section */}
        {activeTab === "projects" && (
          <>
            <h1 className={styles.pageHeader}>Project Management</h1>
            <ProjectForm
              editingProject={editingProject}
              onProjectSaved={fetchProjects}
            />
            <div className="mt-10">
              <ProjectTable
                projects={projects}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
              />
            </div>
          </>
        )}
      </div>

      {/* Global Interactive Workflow Modal Sheet Layer */}
      <AppointmentModal
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
      />
    </div>
  );
};

export default AdminDashboard;