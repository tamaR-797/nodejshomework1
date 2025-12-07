const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
let books = [ {
    "id": 1,
    "title": " מיחיע",
    "author_id": 1,
    "year": 2023,
    "genre": "ז'אנר"
  },
  {
    "id": 2,
    "title": " חיחכ",
    "author_id": 2,
    "year": 2020,
    "genre": "ז'אנר"
  }];
  authors = [ {
    "id": 1,
    "name": "שם מחבר",
    "birth_year": 1970,
    "nationality": "לאום"
  },
  {
    "id": 2,
    "name": "שם מחבר",
    "birth_year": 1980,
    "nationality": "לאום"
  }];


// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

// app.get('/books', (req, res)=>{
//     const books = require('./books.json');
//     res.status(200);
//     res.json(books);
// });
// app.get('/writer', (req, res)=>{
//     const authors = require('./authors.json');
//     res.status(200);
//     res.json(authors);
// });
// app.get('/users', (req, res)=>{
//     const users = require('./users.json');
//     res.status(200);
//     res.json(users);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

app.post('/books', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author_id: req.body.author_id
  };
  books.push(book);
  res.status(201).json(book);
});

app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  
  book.title = req.body.title || book.title;
  book.author_id = req.body.author_id || book.author_id;
  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send('Book not found');
  
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook[0]);
});


app.get('/authors', (req, res) => {
  res.json(authors);
});

app.get('/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).send('Author not found');
  res.json(author);
});

app.post('/authors', (req, res) => {
  const author = {
    id: authors.length + 1,
    name: req.body.name
  };
  authors.push(author);
  res.status(201).json(author);
});

app.put('/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).send('Author not found');

  author.name = req.body.name || author.name;
  res.json(author);
});

app.delete('/authors/:id', (req, res) => {
  const authorIndex = authors.findIndex(a => a.id === parseInt(req.params.id));
  if (authorIndex === -1) return res.status(404).send('Author not found');

  const deletedAuthor = authors.splice(authorIndex, 1);
  res.json(deletedAuthor[0]);
});
});

