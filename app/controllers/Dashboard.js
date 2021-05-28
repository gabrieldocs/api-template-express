
function Dashboard () {
	function index(req, res) {
		res.status(200).json(({
			message: "Welcome to the dashboard"
		}));
	}
	return Object.assign(Object.create({}),{
		index
	});
}


module.exports = Dashboard;
