const axios = require('axios');

const API_KEY = '?api_key=' + process.env.API_KEY;
const API_URI  = 'https://api.hackaday.io/v1/';
// 'https://api.hackaday.io/v1/projects?api_key=' + API_KEY + '&per_page=10&page=1';
const PER_PAGE = 6

const PROJECTS_REQ = API_URI + 'projects' + API_KEY + '&per_page=6&page=1';
const USER_REQ = API_URI + 'users/';

const getProjectDetail = (req, res, next) => {
	//
}

const getProjectsList = async (req, res, next) => {
	let response = await axios.get(PROJECTS_REQ);
	let projectList = response.data
    
    let owners = await Promise.all(projectList.projects.map(async (project) => {
        // console.log(USER_REQ + project.owner_id + API_KEY)
        let res = await axios.get(USER_REQ + project.owner_id + API_KEY)
        // console.log(res.data)
        return res.data;
    }));

    // append owner
    let projects = projectList.projects.map((project, index) => {
        project.owner = owners[index] 
        return project
    })


    return res.render('pages/projectsList', {
        projects,
        owners,
    });
}

module.exports = {
	getProjectsList,
	getProjectDetail,
}
