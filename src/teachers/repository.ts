import { Teacher } from "../../src/utils/models";
import client from "../../src/utils/database"

export const fetchAllTeachersData = async () => {
    const data = await client.query('SELECT * FROM Professores');
    return data.rows;
}

export const fetchAllTeachersDataByDepartment = async (departmentId: string) => {
    const data = await client.query(
        'SELECT * FROM Professores WHERE id_departamento = $1',
        [departmentId]
    )
    return data.rows;
}

export const fetchTeacherDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Professores WHERE id=$1', [id]);
    return data.rows[0];
}

export const createTeacherData = async (teacher: Teacher) => {
    const data = await client.query(
        'INSERT INTO Professores VALUES ($1, $2, $3, $4)',
        [teacher.id, teacher.email, teacher.nome, teacher.id_departamento]
    );
    return data;
}

export const updateTeacherData = async (teacher: Teacher) => {
    const data = await client.query(
        'UPDATE Professores SET email=$2, nome=$3 WHERE id=$1',
        [teacher.id, teacher.email, teacher.nome]
    );
    return data;
}

export const deleteTeacherData = async (id: string) => {
    const data = await client.query('DELETE Professores WHERE id=$1', [id]);
    return data;
}

export const getTeachGrande = async(id: string) => {
    const data = await client.query('SELECT nota FROM NotasProfessores WHERE id=$1', [id]);
    return data.rows[0];
}
