import { Review } from "src/utils/models";
import client from "../utils/database"

export const fetchAllReviewsData = async () => {
    const data = await client.query('SELECT * FROM Avaliacoes');
    return data.rows;
};

export const fetchReviewDataById = async (id: string) => {
    const data = await client.query('SELECT * FROM Avaliacoes WHERE id = $1 LIMIT 1', [id]);
    return data.rows[0];
};

export const createReview = async (review: Review) => {
    const data = await client.query(
        'INSERT INTO Avaliacoes VALUES ($1, $2, $3, $4, $5)',
        [review.id, review.id_estudante, review.id_turma, review.nota, review.descricao]
    );
    return data;
};

export const deleteReview = async (id: string) => {
    const data = await client.query('DELETE FROM Avaliacoes WHERE id = $1', [id]);
    return data;
};

export const updateReviewData = async (review: Review) => {
    const data = await client.query(
        'UPDATE Avaliacoes SET nota=$2 descricao=$3 WHERE id=$1',
        [review.id, review.nota, review.descricao]
    );
    return data;
};
