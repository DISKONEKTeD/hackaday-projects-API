const express = require('express');
const axios = require('axios');
const projectsController = require('../../controller/projectsController');
const router = express.Router();

const API_KEY = '?api_key=' + process.env.API_KEY;
const API_URI  = 'https://api.hackaday.io/v1/';
// 'https://api.hackaday.io/v1/projects?api_key=' + API_KEY + '&per_page=10&page=1';
 
const PROJECTS_REQ = API_URI + 'projects' + API_KEY + '&per_page=10&page=1';
const USER_REQ = API_URI + 'users/';


router.get('/projects', projectsController.getProjectsList);
router.get('/projectsClient', projectsController.getProjectsListClient);
// router.get('/projects/:id', projectsController.getProjectDetail);

module.exports = router;