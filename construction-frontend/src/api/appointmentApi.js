
import axiosInstance from "./axiosConfig";

export const createAppointment =
  async (appointmentData) => {

    const response =
      await axiosInstance.post(
        "/appointments",
        appointmentData
      );

    return response.data;
  };

export const getAppointmentStatus =
  async (appointmentId) => {

    const response =
      await axiosInstance.get(
        `/appointments/status/${appointmentId}`
      );

    return response.data;
  };

export const getAllAppointments =
  async () => {

    const response =
      await axiosInstance.get(
        "/admin/appointments"
      );

    return response.data;
  };

export const getAppointmentById =
  async (id) => {

    const response =
      await axiosInstance.get(
        `/admin/appointments/${id}`
      );

    return response.data;
  };

export const confirmAppointment =
  async (
    id,
    meetingData
  ) => {

    const response =
      await axiosInstance.put(
        `/admin/appointments/${id}/confirm`,
        meetingData
      );

    return response.data;
  };
  export const rejectAppointment =
    async (id) => {

      const response =
        await axiosInstance.put(
          `/admin/appointments/${id}/reject`
        );

      return response.data;
    };
    export const deleteAppointment =
      async (id) => {

        const response =
          await axiosInstance.delete(
            `/admin/appointments/${id}`
          );

        return response.data;
      };
