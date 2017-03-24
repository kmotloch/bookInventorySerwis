module.exports = {
	logRequest: function (req, res, next) {
	    console.log('incoming request at ', new Date());
	    next();
	},
	auth: function (req, res, next) {
		console.log('you can pass my auth');
		next();
	}
}