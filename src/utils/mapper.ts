import { TeacherReviews } from "./models";

export const mapTeacherReviews = (review: string) => {
  const split = review
    .replace('(', '')
    .replace(')', '')
    .replace('"', '')
    .split(',');
  
  return {
    id: split[0],
    nome_professor: split[1],
    nota: +split[2],
    descricao: split[3]
  } as TeacherReviews;
}