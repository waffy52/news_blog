const Post = require('../db/models/blogPost');

exports.create = function (req, res) {
  var newPost = new Post(req.body);
  console.log(req.body);
  newPost.save(function (err) {
    if (err) {
      res.status(400).send('Unable to save post to database');
    } else {
      res.redirect('admin-panel.html');
    }
  });
};

exports.list = function (req, res) {
  Post.find({}).exec(function (err, posts) {
    if (err) {
      return res.send(500, err);
    }
    res.render('index.html', {
      posts: posts,
    });
  });
};
