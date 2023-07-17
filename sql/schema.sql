CREATE TABLE Estudantes (
  id uuid PRIMARY KEY NOT NULL,
  email varchar UNIQUE NOT NULL,
  nome varchar,
  senha varchar NOT NULL,
  curso varchar,
  is_admin boolean
);

CREATE TABLE Departamentos (
  id uuid PRIMARY KEY NOT NULL,
  nome varchar
);

CREATE TABLE Professores (
  id uuid PRIMARY KEY NOT NULL,
  email varchar,
  nome varchar,
  id_departamento uuid NOT NULL
);

CREATE TABLE Disciplinas (
  id uuid PRIMARY KEY NOT NULL,
  nome varchar,
  id_departamento uuid NOT NULL,
  codigo varchar
);

CREATE TABLE Turmas (
  id uuid PRIMARY KEY NOT NULL,
  id_professor uuid NOT NULL,
  id_disciplina uuid NOT NULL,
  codigo varchar
);

CREATE TABLE Avaliacoes (
  id uuid PRIMARY KEY NOT NULL,
  id_estudante uuid NOT NULL,
  id_turma uuid NOT NULL,
  nota int NOT NULL,
  descricao varchar
);

CREATE TABLE Denuncias (
  id uuid PRIMARY KEY NOT NULL,
  id_avaliacao uuid NOT NULL,
  id_estudante uuid NOT NULL
);

ALTER TABLE Professores ADD FOREIGN KEY (id_departamento) REFERENCES Departamentos (id);

ALTER TABLE Disciplinas ADD FOREIGN KEY (id_departamento) REFERENCES Departamentos (id);

ALTER TABLE Turmas ADD FOREIGN KEY (id_disciplina) REFERENCES Disciplinas (id);

ALTER TABLE Turmas ADD FOREIGN KEY (id_professor) REFERENCES Professores (id);

ALTER TABLE Avaliacoes ADD FOREIGN KEY (id_turma) REFERENCES Turmas (id);

ALTER TABLE Avaliacoes ADD FOREIGN KEY (id_estudante) REFERENCES Estudantes (id);

ALTER TABLE Denuncias ADD FOREIGN KEY (id_estudante) REFERENCES Estudantes (id);

ALTER TABLE Denuncias ADD FOREIGN KEY (id_avaliacao) REFERENCES Avaliacoes (id);

ALTER TABLE Turmas ADD FOREIGN KEY (id_disciplina) REFERENCES Disciplinas (id);
