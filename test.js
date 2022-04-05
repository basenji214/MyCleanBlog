const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

BlogPost.create(
  {
    title: "The Mythbuster's Guide to saving money on energy bills",
    body: "If you have been here a long time, you might remember when I went on ITV tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point list. You start spotting them everything at this time of year. They go like this:",
    comment: "This is a comment"
  },
  (err, blogpost) => {
    console.log(err, blogpost);
  }
);
