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
