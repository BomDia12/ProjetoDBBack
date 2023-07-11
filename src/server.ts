import express from 'express';
import { deleteStudentRequest, getAllStudents, getStudentById, postCreateStudent } from './students/controller';
import { createDepartmentRequest, deleteDepartmentRequest, getAllDepartments, getDepartmentById } from './departments/controller';
require('dotenv').config();

const app = express();
app.use(express.json()) // for parsing application/json


// Student CRUD
app.get('/students', getAllStudents);
app.get('/students/:id', getStudentById);
app.post('/students', postCreateStudent);
app.delete('/students/:id', deleteStudentRequest);

// Department CRUD
app.get('/departments', getAllDepartments);
app.get('/departments/:id', getDepartmentById);
app.post('/departments', createDepartmentRequest);
app.delete('/departments/:id', deleteDepartmentRequest);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
