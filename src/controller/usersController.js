const axios = require('axios');

const getProjectsList = (req, res, next) => {
	const { message_id, user_id } = req.body;
	const { token } = req;
	// EXTRACT ERRORS IF PRESENT
	const errors = validationResult(req)
	// IF ERRORS EXIST AKA THE USER HAS SENT INCORRECT INPUT
	// THIS WILL CATCH THEM AND SEND THE ERRORS MESSAGE AS RESPONSE
	if (!errors.isEmpty()) {
	  return errorController.errorHandler(res, errors.array({ onlyFirstError: true })[0].msg, 'unprocessable');
	}
}

const getProjectDetail = (req, res, next) => {
	const { message_id, user_id } = req.body;
	const { token } = req;
	// EXTRACT ERRORS IF PRESENT
	const errors = validationResult(req)
	// IF ERRORS EXIST AKA THE USER HAS SENT INCORRECT INPUT
	// THIS WILL CATCH THEM AND SEND THE ERRORS MESSAGE AS RESPONSE
	if (!errors.isEmpty()) {
	  return errorController.errorHandler(res, errors.array({ onlyFirstError: true })[0].msg, 'unprocessable');
	}
}

module.exports = {
	getProjectsList,
	getProjectDetail,
}
