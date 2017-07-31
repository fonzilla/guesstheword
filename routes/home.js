const express = require('express');
const Word = require('../models/word');
const router = express.Router();

router.get('/', function(req, res){
  console.log(req.session);
  res.render('index', { word: Word.randomWord });
})

module.exports = router;
