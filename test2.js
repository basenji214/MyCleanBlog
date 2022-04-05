
const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

BlogPost.findByIdAndUpdate('624a1575de30b01e479bd0f1', {
  title: "Changing the title again",
  comment: "This is a new comment, heheheheh"},
  (err, blogpost) => {
    console.log(err, blogpost);
  });
