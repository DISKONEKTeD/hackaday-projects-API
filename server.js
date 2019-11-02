const express = require("express");
const path = require('path');
const indexRouter = require('./src/routes');

const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
// views in src
app.set('views', path.join(__dirname, 'src/views'));

// public files
app.use(express.static(path.join(__dirname, 'src/public')))

// set routes
app.use('/', indexRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`))