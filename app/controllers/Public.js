function Public() {
	function index(req, res){
		res.status(200).json({
			message: "Welcome to the express server v1.1",
			date: new Date().toLocaleDateString(),
			links: [],
		});
	}
	return Object.assign(Object.create({}), {index});
}

module.exports = Public;
