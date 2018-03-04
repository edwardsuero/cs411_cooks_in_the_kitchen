const pg = require('pg');

const client = new pg.Client('postgres://localhost:5432/cooks_in_the_kitchen');
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
