import { Student } from "src/utils/models";
import { createStudent, deleteStudentData, fetchAllStudentsData, fetchStudentDataById } from "./repository"
import { v4 as uuid } from "uuid";

export const fetchAllStudents = async () => {
    return await fetchAllStudentsData() as Student[];
};

export const fetchStudentById = async (id: string) => {
    const data = await fetchStudentDataById(id)
    return data[0] as Student;
};

export const createStudentService = async (student: Student) => {
    const id = uuid();

    await createStudent({id, ...student})

    return await fetchStudentById(id);
}

export const deleteStudentService = async (id: string) => {
    return await deleteStudentData(id);
}