console.log("Midnight js wrapper here");

var exec = require("child_process").exec;

let parse = function (inputText, callback) {
	exec('ruby midnight-cli.rb "every 5 minutes"', function (err, stdout, stderr) {
		if (err) {
			console.log(err);
			callback(err, null)
		} else {
			console.log(stdout);
			callback (null, stdout);
		}
	});
}

module.exports = {
	parse
}
