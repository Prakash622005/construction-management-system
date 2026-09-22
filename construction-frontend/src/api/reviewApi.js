import axiosInstance from "./axiosConfig";

export const getReviews = async () => {

    const response =
        await axiosInstance.get(
            "/reviews"
        );

    return response.data;
};

export const addReview = async (review) => {

    const response =
        await axiosInstance.post(
            "/reviews",
            review
        );

    return response.data;
};

export const deleteReview = async (id) => {

    const response =
        await axiosInstance.delete(
            `/admin/reviews/${id}`
        );

    return response.data;
};