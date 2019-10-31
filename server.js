const express = require("express");
const path = require('path');

const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
// views in src
app.set('views', path.join(__dirname, 'src/views'));

// public files
app.use(express.static(path.join(__dirname, 'src/public')))

// page
// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => res.render('pages/projects'));
app.get('/about', (req, res) => res.render('pages/about'));

app.listen(port, () => console.log(`Server listening on port ${port}!`))