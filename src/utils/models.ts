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
