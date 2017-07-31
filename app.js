const express = require('express');
const mustacheExpress = require('mustache-express');
const expressValidator = require("express-validator");
const bodyParser = require('body-parser');
const session = require('express-session');
const Word = require('./models/word');
const homeRoute = require('./routes/home');
const guessRoute = require('./routes/guess');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('mustache', mustacheExpress());
app.set('views', __dirname + '/views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: "smellycat",
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
  })
);

app.use((req, res, next) => {
  if (!req.session.guesses) {
    req.session.guesses = 8;
  } else {
    req.session.guesses -= 1;
  }
  console.log(req.session.guesses);
  next();
});


app.use(homeRoute);
app.use(guessRoute);

app.listen(3000, function(){
  console.log("listening on PORT 3000");
});
