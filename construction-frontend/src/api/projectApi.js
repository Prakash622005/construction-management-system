
import axiosInstance from "./axiosConfig";

export const getAllProjects =
  async () => {

    const response =
      await axiosInstance.get(
        "/projects"
      );

    return response.data;
  };

export const addProject =
  async (projectData) => {

    const response =
      await axiosInstance.post(
        "/admin/projects",
        projectData
      );

    return response.data;
  };

export const getProjectById =
  async (id) => {

    const response =
      await axiosInstance.get(
        `/admin/projects/${id}`
      );

    return response.data;
  };

export const updateProject =
  async (
    id,
    projectData
  ) => {

    const response =
      await axiosInstance.put(
        `/admin/projects/${id}`,
        projectData
      );

    return response.data;
  };

export const deleteProject =
  async (id) => {

    const response =
      await axiosInstance.delete(
        `/admin/projects/${id}`
      );

    return response.data;
  };
