const express = require('express');
const cors = require('cors');
const helloRouter = require('./routes/hello');
const goodbyeRouter = require('@sidneicsfilho/hello-world.routes.goodbye')
const isupRouter = require('@learnbit/microservices.routes.is-up')
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);
app.use('/api', goodbyeRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const { checkOkStatus } = require('@learnbit/microservices.network-profilers.check-ok-status');

checkOkStatus('https://google.com').then((isUp) => {
  console.log(isUp);
});

module.exports = app;