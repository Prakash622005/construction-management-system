import React, {
  useEffect,
  useState
} from "react";

import {
  getStatistics
} from "../../api/statisticsApi";

const StatsSection = () => {

  const [statistics, setStatistics] =
    useState({
      yearsExperience: 0,
      projectsCompleted: 0,
      happyClients: 0
    });

  useEffect(() => {

    fetchStatistics();

  }, []);

  const fetchStatistics =
    async () => {

      try {

        const response =
          await getStatistics();

        setStatistics(response);

      } catch (error) {

        console.error(
          "Failed to load statistics",
          error
        );

      }
    };

  const styles = {
    section:
      "py-20 bg-white relative overflow-hidden",

    container:
      "max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10",

    statBox:
      "bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#0F172A]/5 hover:-translate-y-1 relative group overflow-hidden",

    metric:
      "text-5xl md:text-6xl font-extrabold text-[#3B82F6] mb-3 tracking-tight drop-shadow-sm transition-transform duration-300 group-hover:scale-105",

    label:
      "text-[#0F172A]/70 text-sm md:text-base font-semibold uppercase tracking-wider"
  };

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.statBox}>
          <h2 className={styles.metric}>
            {statistics.yearsExperience}+
          </h2>

          <p className={styles.label}>
            Years Experience
          </p>
        </div>

        <div className={styles.statBox}>
          <h2 className={styles.metric}>
            {statistics.projectsCompleted}+
          </h2>

          <p className={styles.label}>
            Projects Completed
          </p>
        </div>

        <div className={styles.statBox}>
          <h2 className={styles.metric}>
            {statistics.happyClients}+
          </h2>

          <p className={styles.label}>
            Happy Clients
          </p>
        </div>

      </div>

    </section>
  );
};

export default StatsSection;