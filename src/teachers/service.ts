import { Teacher } from "src/utils/models"
import { createTeacherData, deleteTeacherData, fetchAllTeachersData, fetchAllTeachersDataByDepartment, fetchTeacherDataById, updateTeacherData } from "./repository"
import { v4 as uuid } from "uuid";

export const fetchAllTeachers = async () => {
    return await fetchAllTeachersData() as Teacher[];
}

export const fetchAllTeachersByDepartment = async (departmentId: string) => {
    return await fetchAllTeachersDataByDepartment(departmentId) as Teacher[];
}

export const fetchTeacherById = async (id: string) => {
    return await fetchTeacherDataById(id) as Teacher;
}

export const createTeacher = async (teacher: Teacher) => {
    const id = uuid();

    await createTeacherData({...teacher, id});

    return await fetchTeacherById(id);
}

export const updateTeacher = async (teacher: Teacher) => {
    await updateTeacherData(teacher);

    return await fetchTeacherById(teacher.id);
}

export const deleteTeacher = async (id: string) => {
    return await deleteTeacherData(id);
}
