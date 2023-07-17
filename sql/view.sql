CREATE VIEW NotasTurmas AS
SELECT T.codigo, T.id, AVG(A.nota) as nota
FROM Turmas as T
LEFT JOIN Avaliacoes as A 
ON T.id = A.id_turma
GROUP BY T.codigo, T.id;

CREATE VIEW AvaliacoesTurmas AS 
SELECT T.codigo AS codigo, T.id AS id, A.id AS id_avaliacao, A.nota, A.descricao
FROM Turmas AS T
LEFT JOIN Avaliacoes AS A 
ON T.id = A.id_turma
GROUP BY T.codigo, A.id, T.id, A.nota, A.descricao;

CREATE VIEW NotasProfessores AS 
SELECT P.id, P.nome, AVG(A.nota) as nota
FROM Turmas as T, Avaliacoes as A, Professores as P
WHERE A.id_turma = T.id AND P.id = T.id_professor
GROUP BY P.id, P.nome;

CREATE VIEW NotasDisciplinas AS 
SELECT D.id, D.nome, AVG(A.nota)
FROM Turmas as T, Avaliacoes as A, Disciplinas as D
WHERE A.id_turma = T.id AND D.id = T.id_disciplina
GROUP BY D.id, D.nome;

CREATE VIEW DeunciasAvalicoes AS
SELECT D.id AS id, A.id AS id_avaliacao, A.descricao AS descricao
FROM Denuncias AS D
INNER JOIN Avaliacoes AS A
ON D.id_avaliacao = A.id;
