CREATE TYPE teacher_reviews AS (id uuid, nome_professor varchar, nota integer, descricao varchar);

CREATE FUNCTION get_teacher_reviews (uuid) RETURNS TABLE (id uuid, nome_professor varchar, nota integer, descricao varchar) AS $$
SELECT A.id, P.nome as nome_professor, A.nota, A.descricao
FROM Avaliacoes as A, Turmas as T, Professores as P
WHERE T.id_professor = P.ID AND A.id_turma = T.id AND P.id = $1      
GROUP BY A.id, P.id;
$$
LANGUAGE SQL;
