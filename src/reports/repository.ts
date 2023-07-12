import { Report } from "src/utils/models";
import client from "../utils/database"

export const fetchAllReportsData = async () => {
    const data = await client.query('SELECT * FROM Denuncias');
    return data.rows;
};

export const fetchReportDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Denuncias WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createReport = async (report: Report) => {
    const data = await client.query(
        'INSERT INTO Denuncias VALUES ($1, $2, $3)',
        [report.id, report.id_avaliacao, report.id_estudante]
    );
    return data;
};

export const deleteReport = async (id: string) => {
    const data = await client.query('DELETE FROM Denuncias WHERE id = $1', [id]);
    return data;
};
