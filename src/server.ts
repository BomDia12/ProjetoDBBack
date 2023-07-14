import express from 'express';
import { deleteStudentRequest, getAllStudents, getStudentById, postCreateStudent, putStudent } from './students/controller';
import { createDepartmentRequest, deleteDepartmentRequest, getAllDepartments, getDepartmentById, putDepartment } from './departments/controller';
import { createTeacherRequest, deleteTeacherRequest, getAllTeachers, getAllTeachersByDepartment, getTeacherById, putTeacher } from './teachers/controller';
import { createSubjectRequest, deleteSubjectRequest, getAllSubjects, getSubjectById, putSubject } from './subjects/controller';
import { createClassRequest, deleteClassRequest, getAllClasses, getClassById, putClass } from './classes/controller';
import { createReviewRequest, deleteReviewRequest, getAllReviews, getReviewById, getReviewsByTeacher, putReview } from './reviews/controller';
import { createReportRequest, deleteReportRequest, getAllReports, getReportById } from './reports/controller';
require('dotenv').config();

const app = express();
const cors = require('cors');
app.use(express.json()) // for parsing application/json
app.use(cors());


// Student CRUD
app.get('/students', getAllStudents);
app.get('/students/:id', getStudentById);
app.post('/students', postCreateStudent);
app.delete('/students/:id', deleteStudentRequest);
app.put('/students', putStudent);

// Department CRUD
app.get('/departments', getAllDepartments);
app.get('/departments/:departmentId/teachers', getAllTeachersByDepartment)
app.get('/departments/:id', getDepartmentById);
app.post('/departments', createDepartmentRequest);
app.delete('/departments/:id', deleteDepartmentRequest);
app.put('/departments', putDepartment);

// Teacher CRUD
app.get('/teachers', getAllTeachers);
app.get('/teachers/:id', getTeacherById);
app.post('/teachers', createTeacherRequest);
app.delete('/teachers/:id', deleteTeacherRequest);
app.put('/teachers', putTeacher);
app.get('/teachers/:id/reviews', getReviewsByTeacher);

// Subject CRUD
app.get('/subjects', getAllSubjects);
app.get('/subjects/:id', getSubjectById);
app.post('/subjects', createSubjectRequest);
app.delete('/subjects/:id', deleteSubjectRequest);
app.put('/subjects', putSubject);

// Subject CRUD
app.get('/subjects', getAllClasses);
app.get('/subjects/:id', getClassById);
app.post('/subjects', createClassRequest);
app.delete('/subjects/:id', deleteClassRequest);
app.put('/subjects', putClass);

// Review CRUD
app.get('/reviews', getAllReviews);
app.get('/reviews/:id', getReviewById);
app.post('/reviews', createReviewRequest);
app.delete('/reviews/:id', deleteReviewRequest);
app.put('/reviews', putReview);

// Reports CRUD
app.get('/reports', getAllReports);
app.get('/reports/:id', getReportById);
app.post('/reports', createReportRequest);
app.delete('/reports/:id', deleteReportRequest);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
