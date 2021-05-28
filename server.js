const Server = require("./app.js");

const server = Server();

try {
	server.start();
} catch (error) {
	server.stop();
	console.log("[server] Uncaught error!" + error);
}
