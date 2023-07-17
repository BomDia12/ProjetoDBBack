import { ClassReviews, Review, TeacherReviews } from "src/utils/models"
import { createReview, deleteReview, fetchAllReviewsData, fetchClassReviewData, fetchReviewDataById, fetchReviewDataByTeacher, updateReviewData } from "./repository"
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

export const fetchReviewsByTeacher = async (id: string) => {
    return await fetchReviewDataByTeacher(id) as TeacherReviews[];
}

export const fetchClassReview = async (id: string) => {
    return await fetchClassReviewData(id) as ClassReviews[];
}
