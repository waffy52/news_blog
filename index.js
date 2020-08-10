const express = require('express')
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8000;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

router.get('/',function(req,res){
    res.sendFile(path + 'index.html');
  });



// app.set('view engine', 'html');
// this will enable our application to parse our user’s entered data.
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path));

app.listen(port, () => {
  console.log(`News blog listening on port ${port}!`)
});