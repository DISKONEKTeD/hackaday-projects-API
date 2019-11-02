// any issues view here: https://stackoverflow.com/questions/44383387/typescript-error-property-user-does-not-exist-on-type-request
const express = require('express');
const router = express.Router();

// import all routes to use here
const projects = require('./projects');
const about = require('./about');

//set all the routes here
router.use('/', projects);
router.use('/', about);

// index redirects to projects list
router.get('/', (req, res) => res.redirect('/projects'));

module.exports = router;
