# midnight-js
Simple node.js wrapper for bluefuton's midnight library for converting english to cron expressions.

#Setup:
1. Install Ruby for your OS. [https://www.ruby-lang.org]
2. Install [https://github.com/bluefuton/midnight] so that the folder `'midnight'`
is in the same directory as the file `'midnight-cli.rb'`

#Usage:
```
let midnight_js = require('midnight-js');
midnight_js.parse('every 10 minutes', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log("cron expression: " + result;
	}
});
```