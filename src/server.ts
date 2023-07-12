import express from 'express';
import { deleteStudentRequest, getAllStudents, getStudentById, postCreateStudent, putStudent } from './students/controller';
import { createDepartmentRequest, deleteDepartmentRequest, getAllDepartments, getDepartmentById, putDepartment } from './departments/controller';
import { createTeacherRequest, deleteTeacherRequest, getAllTeachers, getAllTeachersByDepartment, getTeacherById, putTeacher } from './teachers/controller';
require('dotenv').config();

const app = express();
app.use(express.json()) // for parsing application/json


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

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
