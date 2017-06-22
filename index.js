console.log("Midnight js wrapper here");

var exec = require("child_process").exec;
let path = require('path');
let parse = function (inputText, callback) {
	var cli_path = '"' + __dirname + '\\midnight-cli.rb' + '"'; //absolute path to midnight-cli.rb
	var command = 'ruby ' +  cli_path + ' "' + inputText + '"'; //command to exec
	exec(command, function (err, stdout, stderr) {
		if (err) {
			console.log(err);
			callback(err, null)
		} else {
			console.log(stdout);
			callback(null, stdout);
		}
	});
	
}

module.exports = {
	parse
}
