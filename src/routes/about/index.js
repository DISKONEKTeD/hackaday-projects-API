const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next) => res.render('pages/about'));

module.exports = router;