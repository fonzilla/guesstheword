const express = require('express');
const router = express.Router();

router.post('/guess', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
