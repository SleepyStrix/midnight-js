let midnight_js = require('midnight-js');
midnight_js.parse('every 10 minutes', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log("cron expression: " + result);
	}
});
