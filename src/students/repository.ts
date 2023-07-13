import { Student } from "src/utils/models";
import client from "../../src/utils/database"

export const fetchAllStudentsData = async () => {
    const data = await client.query('SELECT * FROM Estudantes');
    return data.rows;
}

export const fetchStudentDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Estudantes WHERE id = $1', [id])
    return data.rows;
}

export const createStudent = async (student: Student) => {
    const data = await client.query(
        'INSERT INTO Estudantes VALUES ($1, $2, $3, $4, $5)',
        [student.id, student.email, student.nome, student.senha, student.curso]
    );
    return data;
}

export const deleteStudentData = async (id: string) => {
    const data = await client.query('DELETE FROM Estudantes WHERE id = $1', [id]);
    return data;
}

export const updateStudentData = async (student: Student) => {
    const data = await client.query(
        'UPDATE Estudantes SET email=$2, nome=$3, curso=$4 WHERE id=$1',
        [student.id, student.email, student.nome, student.curso]
    );
    return data;
}
