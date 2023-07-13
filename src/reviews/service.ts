import { Review } from "src/utils/models"
import { createReview, deleteReview, fetchAllReviewsData, fetchReviewDataById, updateReviewData } from "./repository"
import { v4 as uuid } from 'uuid';

export const fetchAllReviews = async () => {
    return await fetchAllReviewsData() as Review[];
};

export const fetchReviewById = async (id: string) => {
    return await fetchReviewDataById(id) as Review;
};

export const createReviewService = async (review: Review) => {
    const id = uuid();

    await createReview({id, ...review});

    return await fetchReviewById(id);
}

export const deleteReviewService = async (id: string) => {
    return await deleteReview(id);
}

export const updateReview = async (review: Review) => {
    await updateReviewData(review);

    return await fetchReviewById(review.id);
}
