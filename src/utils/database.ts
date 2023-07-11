import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'projetodb'
})
client.connect()

export default client
