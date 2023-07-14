CREATE PROCEDURE fetch_teacher_reviews(teach_id uuid)
LANGUAGE SQL
BEGIN ATOMIC
  SELECT A.id, P.nome as nome_professor, A.nota, A.descricao
  FROM Avaliacoes as A, Turmas as T, Professores as P
  WHERE T.id_professor = teach_id AND A.id_turma = T.id AND P.id = teach_id
  GROUP BY A.id, P.id;
END;
