import { Request, Response } from "express";
import { createReviewService, deleteReviewService, fetchAllReviews, fetchClassReview, fetchReviewById, updateReview } from "./service";
import { Review } from "src/utils/models";
import { fetchReviewDataByTeacher } from "./repository";

export const getAllReviews = (req: Request, res: Response) => {
    fetchAllReviews().then((data) => {
        res.status(200).send(data);
    });
};

export const getReviewById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchReviewById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createReviewRequest = (req: Request, res: Response) => {
    const body = req.body as Review;

    createReviewService(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteReviewRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteReviewService(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
};

export const putReview = (req: Request, res: Response) => {
    const body = req.body as Review;

    updateReview(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const getReviewsByTeacher = (req: Request, res: Response) => {
    const id = req.params.id as string;

    fetchReviewDataByTeacher(id).then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        console.log(e)
        res.status(404).send(e);
    });
}

export const getClassReviews = (req: Request, res: Response) => {
    const id = req.params.id as string;

    fetchClassReview(id).then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        console.log(e)
        res.status(404).send(e);
    });
}
