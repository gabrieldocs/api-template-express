"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

let router = {};
let req, res;

fs.readdirSync(__dirname)
	.filter((file)=>{
		return(
			file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
		);
	})
	.forEach((file)=>{
		// console.log(path.join(__dirname, file));
		const route = require(path.join(__dirname, file))(req, res);
		router[route.name] = route;

	});

Object.keys(router).forEach((routeName)=>{
	// console.log(routeName);
	if(router[routeName].associate){
		router[routeName].associate(router);
	}
});


module.exports = router;
