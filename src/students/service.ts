import { Student } from "src/utils/models";
import { createStudent, deleteStudentData, fetchAllStudentsData, fetchStudentByEmail, fetchStudentDataById, updateStudentData } from "./repository"
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

export const updateStudent = async (student: Student) => {
    await updateStudentData(student);

    return await fetchStudentById(student.id);
}

export const performLogin = async (email: string, password: string) => {
    const user = await fetchStudentByEmail(email) as Student;

    if (user?.senha !== password) {
        throw 'wrong login'
    }

    return user;
}
