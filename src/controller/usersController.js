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

	return db.tx(async (t) => {
		/****************************************************************/
		/************* PERMISSIONS: VERIFY USER HAS ACCESS **************/
		/****************************************************************/
		const verified = userController.verifyByIdT(t, user_id, token);
		if(!verified) throw new Error('User Does Not Have Permission');

		const deleted = await message.deleteMessageT(t, message_id, user_id);
		return { deleted };
	})
	.then((result) => {
		const { deleted, blocked }  = result
		return res.status(200)
				.json({
					success: true,
					message: `removed ${deleted.rowCount} request`
				});
	})
	.catch((error) => {
		console.log(error.message)
		return errorController.errorHandler(res, 'Error: Unable To Delete Message', 'unprocessable');	
	});
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

	return db.tx(async (t) => {
		/****************************************************************/
		/************* PERMISSIONS: VERIFY USER HAS ACCESS **************/
		/****************************************************************/
		const verified = userController.verifyByIdT(t, user_id, token);
		if(!verified) throw new Error('User Does Not Have Permission');

		const deleted = await message.deleteMessageT(t, message_id, user_id);
		return { deleted };
	})
	.then((result) => {
		const { deleted, blocked }  = result
		return res.status(200)
				.json({
					success: true,
					message: `removed ${deleted.rowCount} request`
				});
	})
	.catch((error) => {
		console.log(error.message)
		return errorController.errorHandler(res, 'Error: Unable To Delete Message', 'unprocessable');	
	});
}

module.exports = {
	getProjectsList,
	getProjectDetail,
}
