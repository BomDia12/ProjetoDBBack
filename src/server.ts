import express from 'express';
import { deleteStudentRequest, getAllStudents, getStudentById, postCreateStudent } from './students/controller';
require('dotenv').config();

const app = express();
app.use(express.json()) // for parsing application/json


// Student CRUD
app.get('/students', getAllStudents);
app.get('/students/:id', getStudentById);
app.post('/students', postCreateStudent);
app.delete('/students/:id', deleteStudentRequest);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
