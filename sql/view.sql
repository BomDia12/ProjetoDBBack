CREATE VIEW NotasTurmas AS
SELECT T.codigo, T.id, AVG(A.nota)
FROM Turmas as T, Avaliacoes as A
WHERE A.id_turma = T.id
GROUP BY T.codigo, T.id;

CREATE VIEW NotasProfessores AS 
SELECT P.id, P.nome, AVG(A.nota)
FROM Turmas as T, Avaliacoes as A, Professores as P
WHERE A.id_turma = T.id AND P.id = T.id_professor
GROUP BY P.id, P.nome;

CREATE VIEW NotasDisciplinas AS 
SELECT D.id, D.nome, AVG(A.nota)
FROM Turmas as T, Avaliacoes as A, Disciplinas as D
WHERE A.id_turma = T.id AND D.id = T.id_disciplina
GROUP BY D.id, D.nome;
