import React, { useEffect, useState } from "react";
import {
  getStatistics,
  updateStatistics
} from "../../api/statisticsApi";

const StatisticsForm = () => {

  const [data, setData] = useState({
    yearsExperience: "",
    projectsCompleted: "",
    happyClients: ""
  });

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {

    try {

      const response =
        await getStatistics();

      if (response) {
        setData(response);
      }

    } catch (error) {

      console.error(
        "Failed to load statistics",
        error
      );

    }
  };

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateStatistics(data);

      alert(
        "Statistics Updated Successfully"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed To Update Statistics"
      );

    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Company Statistics
      </h2>

      <form onSubmit={handleSubmit}>
        <p>Enter the year of Experience</p>
        <input
          type="number"
          name="yearsExperience"
          placeholder="Years Experience"
          value={data.yearsExperience}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />
<p>Enter the Projects you completed before</p>
        <input
          type="number"
          name="projectsCompleted"
          placeholder="Projects Completed"
          value={data.projectsCompleted}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />
<p>Enter Number of Happy Clients You have</p>
        <input
          type="number"
          name="happyClients"
          placeholder="Happy Clients"
          value={data.happyClients}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Update Statistics
        </button>

      </form>

    </div>
  );
};

export default StatisticsForm;