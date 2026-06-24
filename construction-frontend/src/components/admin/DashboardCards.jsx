import React from "react";

const DashboardCards = ({
  totalAppointments,
  pendingAppointments,
  confirmedAppointments,
  totalProjects
}) => {

  const stats = [
    {
      title: "Total Appointments",
      value: totalAppointments,
      type: "total"
    },
    {
      title: "Pending",
      value: pendingAppointments,
      type: "pending"
    },
    {
      title: "Confirmed",
      value: confirmedAppointments,
      type: "confirmed"
    },
    {
      title: "Projects",
      value: totalProjects,
      type: "projects"
    }
  ];

  const styles = {
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",

    card:
      "bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-md shadow-[#0F172A]/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between relative overflow-hidden",

    cardHeader:
      "flex justify-between items-center mb-4",

    title:
      "text-xs font-bold uppercase tracking-wider text-[#0F172A]/50",

    indicatorDot:
      "w-2.5 h-2.5 rounded-full",

    value:
      "text-3xl md:text-4xl font-extrabold tracking-tight",

    total: {
      text: "text-[#0F172A]",
      dot: "bg-[#0F172A]"
    },

    pending: {
      text: "text-[#EAB308]",
      dot: "bg-[#EAB308]"
    },

    confirmed: {
      text: "text-green-600",
      dot: "bg-green-600"
    },

    projects: {
      text: "text-[#3B82F6]",
      dot: "bg-[#3B82F6]"
    }
  };

  return (
    <div className={styles.grid}>

      {stats.map((item, index) => {

        const colorSet =
          styles[item.type] || styles.total;

        return (
          <div
            key={index}
            className={styles.card}
          >

            <div className={styles.cardHeader}>
              <h3 className={styles.title}>
                {item.title}
              </h3>

              <span
                className={`${styles.indicatorDot} ${colorSet.dot}`}
              />
            </div>

            <h2
              className={`${styles.value} ${colorSet.text}`}
            >
              {item.value}
            </h2>

          </div>
        );
      })}

    </div>
  );
};

export default DashboardCards;