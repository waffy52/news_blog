const express = require('express');
const app = express();
const router = express.Router();
const db = require('./src/db/db');

const path = __dirname + '/views/';
const port = 8000;

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

router.get('/about', function (req, res) {
  res.sendFile(path + 'about.html');
});

router.get('/post', function (req, res) {
  res.sendFile(path + 'post.html');
});

router.get('/contact', function (req, res) {
  res.sendFile(path + 'contact.html');
});

router.get('/admin', function (req, res) {
  res.sendFile(path + 'admin.html');
});

router.get('/add-post', function (req, res) {
  res.sendFile(path + 'add-post.html');
});

router.get('*', function (req, res) {
  // Invalid request
  res.sendFile(path + 'not-found.html');
});

app.set('view engine', 'html');
// this will enable our application to parse our user’s entered data.
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {
  console.log(`News blog listening on port ${port}!`);
});
