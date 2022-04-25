const express = require("express"); // import express
const path = require("path"); // import path
const app = new express(); // create express app
const ejs = require("ejs"); // import ejs
app.set("view engine", "ejs"); // set view engine to ejs
app.use(express.static("public")); // use public folder
const mongoose = require("mongoose"); // import mongoose
mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true }); // connect to mongodb
const bodyParser = require("body-parser"); // import body-parser
app.use(bodyParser.json()); // use body-parser
app.use(bodyParser.urlencoded({ extended: true })); // use body-parser
const BlogPost = require("./models/blogPost.js"); // import blogPost model



app.listen(4000, () => {
  console.log(
    "\n<----------------------------------------------------------->"
  );
  console.log("    listening on port 4000"); // listen on port 4000
  console.log(`    ${Date(Date.now())}`);
  console.log("<----------------------------------------------------------->");
});

/*
app.get("/", (req, res) => {
  console.log(
    "\n<--------------------------------------------------------------->"
  );
  console.log(`/    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
  res.render("index");
});
*/


app.get("/about", (req, res) => {
  console.log(
    "\n<--------------------------------------------------------------->"
  );
  console.log(`/about    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
  res.render("about");
});

app.get("/contact", (req, res) => {
  console.log(
    "\n<--------------------------------------------------------------->"
  );
  console.log(`/contact    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
  res.render("contact");
});

app.get("/post", (req, res) => {
  console.log(
    "\n<--------------------------------------------------------------->"
  );
  console.log(`/post    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
  res.render("post");
});

app.get('/posts/new', (req, res) => {
  console.log(
  "\n<--------------------------------------------------------------->"
  );
  console.log(`/post/new    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
  res.render('create')
}); 

app.post('/post/store', async (req, res) => {
  console.log(
    "\n<--------------------------------------------------------------->"
    );
    console.log(req.body)
    console.log(`/post/store    ${Date(Date.now())}`);
    console.log(
      "<--------------------------------------------------------------->"
    );
  await BlogPost.create(req.body,(error,BlogPost) => {
    res.redirect('/') 
    })
});

app.get('/', async (req, res) => {
  const blogposts = await BlogPost.find({})
  res.render('index', {blogposts: blogposts});
  console.log(
    "\n<--------------------------------------------------------------->"
  );
  console.log(`/    ${Date(Date.now())}`);
  console.log(
    "<--------------------------------------------------------------->"
  );
});




