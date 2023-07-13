import { Request, Response } from "express";
import { createSubjectService, deleteSubjectService, fetchAllSubjects, fetchSubjectById, updateSubject } from "./service";
import { Subject } from "src/utils/models";

export const getAllSubjects = (req: Request, res: Response) => {
    fetchAllSubjects().then((data) => {
        res.status(200).send(data);
    });
};

export const getSubjectById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchSubjectById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createSubjectRequest = (req: Request, res: Response) => {
    const body = req.body as Subject;

    createSubjectService(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteSubjectRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteSubjectService(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
};

export const putSubject = (req: Request, res: Response) => {
    const body = req.body as Subject;

    updateSubject(body).then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        res.status(404).send(e);
    });
};

