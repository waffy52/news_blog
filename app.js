const express = require('express');
const app = express();
const db = require('./src/db/db');
const posts = require('./src/routes/blog');

const path = __dirname + '/views/';
const port = 8000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', posts);

app.listen(port, () => {
  console.log(`News blog listening on port ${port}!`);
});
