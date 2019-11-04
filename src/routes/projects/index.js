const express = require('express');
const projectsController = require('../../controller/projectsController');
const router = express.Router();

router.get('/projects', projectsController.getProjectsList);
router.get('/projectsClient', projectsController.getProjectsListClient);
router.get('/projects/:id', projectsController.getProjectDetail);

module.exports = router;