CREATE PROCEDURE create_review(
  in_id uuid,
  student_id uuid,
  class_id uuid,
  nota integer,
  descricao varchar
)
LANGUAGE SQL
BEGIN ATOMIC
  INSERT INTO Avaliacoes VALUES (
    in_id,
    student_id,
    class_id,
    nota,
    descricao
  );
END;

CREATE PROCEDURE accept_report(in_id uuid)
LANGUAGE SQL
AS $$ 
  DELETE FROM Denuncias AS D WHERE D.id_avaliacao = in_id;
  DELETE FROM Avaliacoes AS A WHERE A.id = in_id;
$$;
