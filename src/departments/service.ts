import { Department } from "src/utils/models"
import { createDepartment, deleteDepartment, fetchAllDepartmentsData, fetchDepartmentDataById } from "./repository"
import { v4 as uuid} from 'uuid';

export const fetchAllDepartments = async () => {
    return await fetchAllDepartmentsData() as Department[];
};

export const fetchDepartmentById = async (id: string) => {
    return await fetchDepartmentDataById(id) as Department;
};

export const createDepartmentService = async (department: Department) => {
    const id = uuid();

    await createDepartment({id, ...department});

    return await fetchDepartmentById(id);
}

export const deleteDepartmentService = async (id: string) => {
    return await deleteDepartment(id);
}
