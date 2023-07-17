import { Class } from "src/utils/models";
import client from "../../src/utils/database"

export const fetchAllClassesData = async () => {
    const data = await client.query('SELECT * FROM NotasTurmas');
    return data.rows;
};

export const fetchClassDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Turmas WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createClass = async (value: Class) => {
    const data = await client.query(
        'INSERT INTO Turmas VALUES ($1, $2, $3, $4)',
        [value.id, value.id_professor, value.id_disciplina, value.codigo]
    );
    return data;
};

export const deleteClass = async (id: string) => {
    const data = await client.query('DELETE FROM Turmas WHERE id = $1', [id]);
    return data;
};

export const updateClassData = async (value: Class) => {
    const data = await client.query(
        'UPDATE Turmas SET codigo=$2 WHERE id=$1',
        [value.id, value.codigo]
    );
    return data;
};
