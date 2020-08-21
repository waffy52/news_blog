const express = require('express');
const router = express.Router();
const post = require('../controller/blog');

const path = require('path');

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/about', function (req, res) {
  res.sendFile(path.resolve('views/about.html'));
});

router.get('/post', function (req, res) {
  res.sendFile(path.resolve('views/post.html'));
});

router.get('/contact', function (req, res) {
  res.sendFile(path.resolve('views/contact.html'));
});

router.get('/admin-login', function (req, res) {
  res.sendFile(path.resolve('views/admin-login.html'));
});

router.get('/admin-panel', function (req, res) {
  res.sendFile(path.resolve('views/admin-panel.html'));
});

router.post('/login-admin', (req, res) => {
  res.redirect('admin-panel.html');
});

router.post('/create-post', function (req, res) {
  post.create(req, res);
});

router.get('*', function (req, res) {
  // Invalid request
  res.sendFile(path.resolve('views/not-found.html'));
});

module.exports = router;
