const fs = require("fs");

fs.readFileSync("pokedex.json", (err, data) => {
	if (data) {
		console.log(data);
	} else {
		console.log(err);
	}
});
