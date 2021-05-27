exports.index = (req, res) =>{
	res.status(200).json({
		message: "Welcome to the express server v1.1",
		date: new Date().toLocaleDateString(),
		links: []
	});
};