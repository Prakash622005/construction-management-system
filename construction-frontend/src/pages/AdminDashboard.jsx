import React, { useEffect, useState } from "react";

import {
  getAllProjects,
  deleteProject
} from "../api/projectApi";

import {
  getAllAppointments,
  rejectAppointment,
  deleteAppointment
} from "../api/appointmentApi";

import {
  getReviews,
  deleteReview
} from "../api/reviewApi";

import Sidebar from "../components/admin/Sidebar";
import DashboardCards from "../components/admin/DashboardCards";
import AppointmentCard from "../components/admin/AppointmentCard";
import AppointmentModal from "../components/admin/AppointmentModal";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectTable from "../components/admin/ProjectTable";
import StatisticsForm from "../components/admin/StatisticsForm";
import ReviewTable from "../components/admin/ReviewTable";

const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState("dashboard");

  const [appointments, setAppointments] = useState([]);

  const [projects, setProjects] = useState([]);

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {

    fetchAppointments();

    fetchProjects();

    fetchReviews();

  }, []);

  const fetchAppointments = async () => {

    try {

      setLoading(true);

      const data =
        await getAllAppointments();

      setAppointments(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const fetchProjects = async () => {

    try {

      const data =
        await getAllProjects();

      setProjects(data);

    } catch (error) {

      console.error(error);

    }

  };

  const fetchReviews = async () => {

    try {

      const data =
        await getReviews();

      setReviews(data);

    } catch (error) {

      console.error("Failed to fetch reviews", error);

    }

  };

  const handleEditProject = (project) => {

    setEditingProject(project);

  };

  const handleDeleteProject = async (id) => {

    if (!window.confirm("Delete this project?"))
      return;

    try {

      await deleteProject(id);

      fetchProjects();

      alert("Project Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const handleRejectAppointment = async (id) => {

    if (!window.confirm("Reject this appointment?"))
      return;

    try {

      await rejectAppointment(id);

      fetchAppointments();

      alert("Appointment Rejected Successfully");

    } catch (error) {

      console.error(error);

      alert("Reject Failed");

    }

  };

  const handleDeleteAppointment = async (id) => {

    if (!window.confirm("Delete this appointment?"))
      return;

    try {

      await deleteAppointment(id);

      fetchAppointments();

      alert("Appointment Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const handleDeleteReview = async (id) => {

    if (!window.confirm("Delete this review?"))
      return;

    try {

      await deleteReview(id);

      fetchReviews();

      alert("Review Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const totalAppointments = appointments.length;

  const totalProjects = projects.length;

  const pendingAppointments =
    appointments.filter(
      a => a.status === "PENDING"
    ).length;

  const confirmedAppointments =
    appointments.filter(
      a => a.status === "CONFIRMED"
    ).length;

  const styles = {

    dashboardShell:
      "flex bg-[var(--bg)] min-h-screen",

    mainContentArea:
      "flex-1 p-8 overflow-y-auto",

    pageHeader:
      "text-3xl font-bold mb-8",

    loadingState:
      "text-center py-10",

    emptyState:
      "text-center py-10",

    appointmentGrid:
      "grid grid-cols-1 xl:grid-cols-2 gap-6"

  };

  return (

    <div className={styles.dashboardShell}>

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className={styles.mainContentArea}>

        {activeTab === "dashboard" && (

          <>

            <h1 className={styles.pageHeader}>
              Dashboard
            </h1>

            <DashboardCards
              totalAppointments={totalAppointments}
              pendingAppointments={pendingAppointments}
              confirmedAppointments={confirmedAppointments}
              totalProjects={totalProjects}
            />

          </>

        )}

        {activeTab === "appointments" && (

          <>

            <h1 className={styles.pageHeader}>
              Appointments
            </h1>

            {loading ? (

              <div className={styles.loadingState}>
                Loading...
              </div>

            ) : appointments.length === 0 ? (

              <div className={styles.emptyState}>
                No Appointments Found
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

        {activeTab === "statistics" && (

          <>

            <h1 className={styles.pageHeader}>
              Statistics
            </h1>

            <StatisticsForm />

          </>

        )}

        {activeTab === "projects" && (

          <>

            <h1 className={styles.pageHeader}>
              Projects
            </h1>

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

        {activeTab === "reviews" && (

          <>

            <h1 className={styles.pageHeader}>
              Customer Reviews
            </h1>

            <ReviewTable
              reviews={reviews}
              onDelete={handleDeleteReview}
            />

          </>

        )}

      </div>

      <AppointmentModal
        appointment={selectedAppointment}
        onClose={() =>
          setSelectedAppointment(null)
        }
      />

    </div>

  );

};

export default AdminDashboard;