const Server = require("./app.js");

const server = Server();

try {
	server.up();
} catch (error) {
	server.down();
	console.log("[server] Uncaught error!" + error);
}
