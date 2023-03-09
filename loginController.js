const { User } = require("./models/userModel");
const createError = require("http-errors");

exports.login = async function (req, res) {
	const user = await User.findOne({ userName: req.body.userName });
	console.log(user);
	if (!user) {
		return res.sendStatus(401);
	}
	if (req.body.password !== user.password) {
		return res.sendStatus(401);
	}
	res.send({
		token: "secretstring",
	});
};
