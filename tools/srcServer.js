import express from 'express';
import path from 'path';
import open from 'open';
import logger from 'morgan';
import bodyParser from 'body-parser';
import route from '../server/routes';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', route);

app.get('/*', (req, res) => {
  res.status(200).send({ message: 'Welcome to balancr.' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

export default app;
