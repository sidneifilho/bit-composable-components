const express = require('express');
const { Request, Response, Router } = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;