const express = require('express');
const path = require('path');

const app = express();
// const bodyParser = require('body-parser');
const router = require(path.resolve(__dirname, 'router'));

app.use(express.json());
// app.use(bodyParser.json());

app.use('/', router);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use((req, res) => res.status(404).send('404 bad request'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    message: { err: 'An error occurred' },
  };
  console.log(defaultErr);
  return res.status(500).json(defaultErr);
});

app.listen(3000);
