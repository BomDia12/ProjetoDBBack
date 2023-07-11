import express, { Request, Response } from 'express';
import client from './utils/database';
require('dotenv').config();

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const data = await client.query('SELECT * FROM Estudantes')
  res.send(data.rows);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});