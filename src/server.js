const express = require('express')
const app = express()
const { Pool } = require('pg')
const pool = new Pool();

app.get('/api', (req, res) => res.send('Welcome to the Cooks in the Kitchen Rest API'));

app.get('/api/system', (req, res) => {
    pool.connect()
      .then(client => {
        return client.query('SELECT * FROM application_data')
          .then(qres => {
            client.release()
            res.send(qres.rows[0])
          })
          .catch(e => {
            client.release()
            console.log(err.stack)
          })
    })
});

app.listen(8080,'127.0.0.1',() => console.log('Example app listening on port 8080!'));
