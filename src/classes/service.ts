import { Class } from "src/utils/models"
import { createClass, deleteClass, fetchAllClassesData, fetchClassDataById } from "./repository"
import { v4 as uuid} from 'uuid';

export const fetchAllClasses = async () => {
    return await fetchAllClassesData() as Class[];
};

export const fetchClassById = async (id: string) => {
    return await fetchClassDataById(id) as Class;
};

export const createClassService = async (department: Class) => {
    const id = uuid();

    await createClass({id, ...department});

    return await fetchClassById(id);
}

export const deleteClassService = async (id: string) => {
    return await deleteClass(id);
}

export const updateClass = async (department: Class) => {
    await createClass(department);

    return await fetchClassById(department.id);
}
