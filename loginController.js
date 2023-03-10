const { User } = require("./models/userModel");
const createError = require("http-errors");
const { v4: uuidv4 } = require('uuid');

exports.login = async function (req, res) {
	const user = await User.findOne({ userName: req.body.userName });
	console.log(user);
	const stringToken = uuidv4()
	user.token = stringToken
	user.save()
	if (!user) {
		return res.sendStatus(401);
	}
	if (req.body.password !== user.password) {
		return res.sendStatus(401);
	}
	res.send({
		token: stringToken,
	});
};
