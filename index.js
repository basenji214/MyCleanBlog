const express = require('express'); // import express
const path = require('path'); // import path
const app = new express(); // create express app
const ejs = require('ejs'); // import ejs
app.set('view engine', 'ejs'); // set view engine to ejs
app.use(express.static('public')); // use public folder
const mongoose = require('mongoose'); // import mongoose

moongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true }); // connect to mongodb


app.listen(4000, () => {
    console.log('\n<----------------------------------------------------------->');
    console.log('    listening on port 4000'); // listen on port 4000
    console.log(`    ${Date(Date.now())}`);
    console.log('<----------------------------------------------------------->');
});

app.get('/', (req, res) => {
    var dir1 = path.resolve(__dirname, 'pages/index.html');
    console.log('\n<--------------------------------------------------------------->');
    console.log(`    ${Date(Date.now())}`);
    console.log(`    dir: ${dir1}`);
    console.log('<--------------------------------------------------------------->');
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index');
});

app.get('/about', (req, res) => {
    var dir1 = path.resolve(__dirname, 'pages/about.html');
    console.log('\n<--------------------------------------------------------------->');
    console.log(`    ${Date(Date.now())}`);
    console.log(`    dir: ${dir1}`);
    console.log('<--------------------------------------------------------------->');
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about');
});

app.get('/contact', (req, res) => {
    var dir1 = path.resolve(__dirname, 'pages/contact.html');
    console.log('\n<--------------------------------------------------------------->');
    console.log(`    ${Date(Date.now())}`);
    console.log(`    dir: ${dir1}`);
    console.log('<--------------------------------------------------------------->');
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact');
});

app.get('/post', (req, res) => {
    var dir1 = path.resolve(__dirname, 'pages/post.html');
    console.log('\n<--------------------------------------------------------------->');
    console.log(`    ${Date(Date.now())}`);
    console.log(`    dir: ${dir1}`);
    console.log('<--------------------------------------------------------------->');
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post');
});

