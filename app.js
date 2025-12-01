const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/books', (req, res)=>{
    const books = require('./books.json');
    res.status(200);
    res.json(books);
});
app.get('/writer', (req, res)=>{
    const authors = require('./authors.json');
    res.status(200);
    res.json(authors);
});
app.get('/users', (req, res)=>{
    const users = require('./users.json');
    res.status(200);
    res.json(users);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
