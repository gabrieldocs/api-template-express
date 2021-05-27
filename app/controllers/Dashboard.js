exports.index = (req, res) =>{
	res.status(200).json({
		message: "Welcome to the dashboard index",
		date: new Date().toLocaleDateString()
	});
};