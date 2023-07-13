import { Subject } from "src/utils/models"
import { createSubject, deleteSubject, fetchAllSubjectsData, fetchSubjectDataById, updateSubjectData } from "./repository"
import { v4 as uuid } from 'uuid';

export const fetchAllSubjects = async () => {
    return await fetchAllSubjectsData() as Subject[];
};

export const fetchSubjectById = async (id: string) => {
    return await fetchSubjectDataById(id) as Subject;
};

export const createSubjectService = async (subject: Subject) => {
    const id = uuid();

    await createSubject({id, ...subject});

    return await fetchSubjectById(id);
}

export const deleteSubjectService = async (id: string) => {
    return await deleteSubject(id);
}

export const updateSubject = async (subject: Subject) => {
    await updateSubjectData(subject);

    return await fetchSubjectById(subject.id);
}
