const express = require('express');
const cors = require('cors');
const helloRouter = require('./routes/hello');
const { getIsUpRoute } = require('@sidneicsfilho/ms-demo.routes.is-up')
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use('/api', helloRouter);

const isUpRoute = getIsUpRoute()
app[isUpRoute.method](isUpRoute.route, isUpRoute.middlewares)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app;