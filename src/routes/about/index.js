const express = require('express');
const router = express.Router();

// import db from './queries';

router.get('/about', (req, res, next) => res.render('pages/about'));


module.exports = router;