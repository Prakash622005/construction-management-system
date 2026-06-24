
import axiosInstance from "./axiosConfig";

export const loginAdmin = async (
  credentials
) => {

  const response =
    await axiosInstance.post(
      "/auth/login",
      credentials
    );

  return response.data;
};
