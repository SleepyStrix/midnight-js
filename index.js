//console.log("Midnight js wrapper here");

var exec = require("child_process").exec;
let path = require('path');
let parse = function (inputText, callback) {
	var cli_path = path.join(__dirname, 'midnight-cli.rb'); //absolute path to midnight-cli.rb
	//var command = 'bundle exec ruby -rubygems ' + cli_path + ' "' + inputText + '"'; //command to exec
	var command = 'ruby -rubygems ' + cli_path + ' "' + inputText + '"'; //command to exec
	exec(command, {
		cwd: __dirname
	}, function (err, stdout, stderr) {
		if (err) {
			//console.log(err);
			callback(err, null);
		} else if (stderr) {
			callback(stderr, null);
		} else {
			//console.log(stdout);
			var output = stdout;
			output = output.split("\n").join("");
			output = output.split("\r").join("");
			callback(null, output);
		}
	});
}

module.exports = {
	parse
}
