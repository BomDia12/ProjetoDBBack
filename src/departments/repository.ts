import { Department } from "src/utils/models";
import client from "../../src/utils/database"

export const fetchAllDepartmentsData = async () => {
    const data = await client.query('SELECT * FROM Departamentos');
    return data.rows;
};

export const fetchDepartmentDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Departamentos WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createDepartment = async (department: Department) => {
    const data = await client.query(
        'INSERT INTO Departamentos VALUES ($1, $2)',
        [department.id, department.nome]
    );
    return data;
};

export const deleteDepartment = async (id: string) => {
    const data = await client.query('DELETE FROM Departamentos WHERE id = $1', [id]);
    return data;
};

export const updateDepartmentData = async (department: Department) => {
    const data = await client.query(
        'UPDATE Departamentos SET nome=$2 WHERE id=$1',
        [department.id, department.nome]
    );
    return data;
};
