import { Request, Response } from "express";
import { createReportService, deleteReportService, fetchAllReports, fetchReportById } from "./service";
import { Report } from "src/utils/models";

export const getAllReports = (req: Request, res: Response) => {
    fetchAllReports().then((data) => {
        res.status(200).send(data);
    });
};

export const getReportById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchReportById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createReportRequest = (req: Request, res: Response) => {
    const body = req.body as Report;

    createReportService(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteReportRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteReportService(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
};
