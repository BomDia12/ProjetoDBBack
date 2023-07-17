import { Request, Response } from "express"
import { createStudentService, deleteStudentService, fetchAllStudents, fetchStudentById, performLogin, updateStudent } from "./service"
import { Student } from "src/utils/models";

export const getAllStudents = (req: Request, res: Response) => {
    fetchAllStudents().then((data) => {
        res.status(200).send(data)
    });
}

export const getStudentById = (req: Request, res: Response) => {
    const id = req.params.id;

    if (id === '') {
        return res.status(400).send({
            message: "Please fill the id field"
        })
    }

    fetchStudentById(id).then((data) => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(404).send();
    })
}

export const postCreateStudent = (req: Request, res: Response) => {
    const body = req.body as Student;

    if (!body.email || !body.senha) {
        return res.status(400).send({
            message: "Please provide an email and a password"
        });
    }

    createStudentService(body).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        res.status(400).send({
            message: "This email has already been used!"
        })
    });
}

export const deleteStudentRequest = (req: Request, res: Response) => {
    const id = req.params.id;

    deleteStudentService(id).then(data => {
        res.status(200).send();
    }).catch(() => {
        res.status(404).send();
    });
}

export const putStudent = (req: Request, res: Response) => {
    const body = req.body as Student;

    updateStudent(body).then(data => {
        res.status(200).send(data);
    }).catch((e) => {
        console.log(e)
        res.status(404).send();
    });
}

export const login = (req: Request, res: Response) => {
    const email = req.body.email as string;
    const password = req.body.password as string;

    performLogin(email, password).then(data => {
        res.status(200).send(data)
    }).catch(e => {
        console.log(e)
        res.status(401).send(e)
    })
}
