import { Subject } from "src/utils/models";
import client from "../utils/database"

export const fetchAllSubjectsData = async () => {
    const data = await client.query('SELECT * FROM Disciplinas');
    return data.rows;
};

export const fetchSubjectDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Disciplinas WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createSubject = async (subject: Subject) => {
    const data = await client.query(
        'INSERT INTO Disciplinas VALUES ($1, $2, $3, $4)',
        [subject.id, subject.nome, subject.id_departamento, subject.codigo]
    );
    return data;
};

export const deleteSubject = async (id: string) => {
    const data = await client.query('DELETE FROM Disciplinas WHERE id = $1', [id]);
    return data;
};

export const updateSubjectData = async (subject: Subject) => {
    const data = await client.query(
        'UPDATE Disciplinas SET nome=$2, codigo=$3 WHERE id=$1',
        [subject.id, subject.nome, subject.codigo]
    );
    return data;
};
