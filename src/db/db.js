const mongoose = require('mongoose');

const MONGO_USERNAME = 'stefan_faix_52';
const MONGO_PASSWORD = 'Smacnego_52';
const MONGO_DB_NAME = 'news-blog-db';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.j6igj.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });
