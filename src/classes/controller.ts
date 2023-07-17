import { Request, Response } from "express";
import { createClassService, deleteClassService, fetchAllClasses, fetchClassById, updateClass } from "./service";
import { Class } from "src/utils/models";

export const getAllClasses = (req: Request, res: Response) => {
    fetchAllClasses().then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        console.log(e)
    });
};

export const getClassById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchClassById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createClassRequest = (req: Request, res: Response) => {
    const body = req.body as Class;

    createClassService(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteClassRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteClassService(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
};

export const putClass = (req: Request, res: Response) => {
    const body = req.body as Class;

    updateClass(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

