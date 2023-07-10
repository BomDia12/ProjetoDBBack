CREATE TABLE "Estudantes" (
  "id" uuid PRIMARY KEY NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "nome" varchar,
  "senha" varchar NOT NULL,
  "curso" varchar
);

CREATE TABLE "Departamento" (
  "id" uuid PRIMARY KEY NOT NULL,
  "nome" varchar
);

CREATE TABLE "Professores" (
  "id" uuid PRIMARY KEY NOT NULL,
  "email" varchar,
  "nome" varchar,
  "id_departamento" uuid NOT NULL
);

CREATE TABLE "Disciplinas" (
  "id" uuid PRIMARY KEY NOT NULL,
  "name" varchar,
  "id_departamento" uuid NOT NULL,
  "codigo" varchar
);

CREATE TABLE "Turma" (
  "id" uuid PRIMARY KEY NOT NULL,
  "id_professor" uuid NOT NULL,
  "id_disciplina" uuid NOT NULL,
  "codigo" varchar
);

CREATE TABLE "Avaliacoes" (
  "id" uuid PRIMARY KEY NOT NULL,
  "id_estudante" uuid NOT NULL,
  "id_turma" uuid NOT NULL,
  "nota" int NOT NULL,
  "descricao" varchar
);

CREATE TABLE "Denuncias" (
  "id" uuid PRIMARY KEY NOT NULL,
  "id_avaliacao" uuid NOT NULL,
  "id_estudante" uuid NOT NULL
);

ALTER TABLE "Professores" ADD FOREIGN KEY ("id_departamento") REFERENCES "Departamento" ("id");

ALTER TABLE "Disciplinas" ADD FOREIGN KEY ("id_departamento") REFERENCES "Departamento" ("id");

ALTER TABLE "Turma" ADD FOREIGN KEY ("id_disciplina") REFERENCES "Disciplinas" ("id");

ALTER TABLE "Turma" ADD FOREIGN KEY ("id_professor") REFERENCES "Professores" ("id");

ALTER TABLE "Avaliacoes" ADD FOREIGN KEY ("id_turma") REFERENCES "Turma" ("id");

ALTER TABLE "Avaliacoes" ADD FOREIGN KEY ("id_estudante") REFERENCES "Estudantes" ("id");

ALTER TABLE "Denuncias" ADD FOREIGN KEY ("id_estudante") REFERENCES "Estudantes" ("id");

ALTER TABLE "Denuncias" ADD FOREIGN KEY ("id_avaliacao") REFERENCES "Avaliacoes" ("id");

ALTER TABLE "Turma" ADD FOREIGN KEY ("id_disciplina") REFERENCES "Turma" ("id");
