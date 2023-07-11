import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('new test!');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});