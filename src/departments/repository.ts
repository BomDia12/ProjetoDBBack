import { Department } from "src/utils/models";
import client from "../../src/utils/database"

export const fetchAllDepartmentsData = async () => {
    const data = await client.query('SELECT * FROM Departamento');
    return data.rows;
};

export const fetchDepartmentDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Departamento WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createDepartment = async (department: Department) => {
    const data = await client.query(
        'INSERT INTO Departamento VALUES ($1, $2)',
        [department.id, department.nome]
    );
    return data;
};

export const deleteDepartment = async (id: string) => {
    const data = await client.query('DELETE FROM Departamento WHERE id = $1', [id]);
    return data;
};
