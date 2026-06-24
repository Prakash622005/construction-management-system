import axiosInstance from "./axiosConfig";

export const getStatistics = async () => {

  const response =
    await axiosInstance.get(
      "/statistics"
    );

  return response.data;
};

export const updateStatistics =
  async (data) => {

    const response =
      await axiosInstance.put(
        "/statistics",
        data
      );

    return response.data;
  };