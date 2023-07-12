import { Request, Response } from "express";
import { createTeacher, deleteTeacher, fetchAllTeachers, fetchAllTeachersByDepartment, fetchTeacherById, updateTeacher } from "./service";
import { Teacher } from "src/utils/models";

export const getAllTeachers = (req: Request, res: Response) => {
    fetchAllTeachers().then((data) => {
        res.status(200).send(data);
    });
};

export const getAllTeachersByDepartment = (req: Request, res: Response) => {
    const departmentId = req.params.departmentId;

    fetchAllTeachersByDepartment(departmentId).then((data) => {
        res.status(200).send(data);
    });
};

export const getTeacherById = (req: Request, res: Response) => {
    const id = req.params.id;

    fetchTeacherById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

export const createTeacherRequest = (req: Request, res: Response) => {
    const body = req.body as Teacher;

    createTeacher(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send();
    });
}

export const deleteTeacherRequest = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id)

    deleteTeacher(id).then(() => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
};

export const putTeacher = (req: Request, res: Response) => {
    const body = req.body as Teacher;

    updateTeacher(body).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    });
};

