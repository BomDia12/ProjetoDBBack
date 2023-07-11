import { Request, Response } from "express";
import { createDepartmentService, deleteDepartmentService, fetchAllDepartments, fetchDepartmentById } from "./service";
import { Department } from "src/utils/models";

export const getAllDepartments = (req: Request, res: Response) => {
    fetchAllDepartments().then((data) => {
        res.status(200).send(data);
    });
};

export const getDepartmentById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchDepartmentById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createDepartmentRequest = (req: Request, res: Response) => {
    const body = req.body as Department;

    createDepartmentService(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteDepartmentRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteDepartmentService(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
}
