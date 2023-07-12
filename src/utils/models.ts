export interface Student {
    id?: string;
    email: string;
    nome?: string;
    senha?: string;
    curso?: string;
}

export interface Department {
    id?: string;
    nome?: string;
}

export interface Teacher {
    id?: string;
    email?: string;
    nome?: string;
    id_departamento?: string;
}

export interface Subject {
    id?: string;
    nome?: string;
    id_departamento?: string;
    codigo?: string;
}

export interface Class {
    id?: string;
    id_professor?: string;
    id_disciplina?: string;
    codigo?: string;
}

export interface Review {
    id?: string;
    id_estudante?: string;
    id_turma?: string;
    nota: number;
    descricao: string;
}

export interface Report {
    id?: string;
    id_avaliacao?: string;
    id_estudante?: string;
}
