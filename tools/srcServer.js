import express from 'express';
import path from 'path';
import open from 'open';
import logger from 'morgan';
import bodyParser from 'body-parser';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', (req, res) => {
  res.status(200).send({ message: 'Welcome to balancr.' });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

export default app;
