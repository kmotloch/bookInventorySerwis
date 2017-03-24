module.exports = function (stock) {
	return {
		hello: function (req, res, next) {
			res.send('say helllo');
		},

		stockUp: function (req, res, next) {
			
	       	var isbn = req.body.isbn;
	       	var count = req.body.count;

	       	stock.stockRepository
		       	.stockUp(isbn, count)
		        .then(function() {
		            res.json({
		                isbn: req.body.isbn,
		                count: req.body.count
		            });
		        }).catch(next);
		},

		findAll: function(req, res, next) {
		 	stock.stockRepository
	            .findAll()
	            .then(function (results) {
	                res.json(results);
	            }).catch(next);
		},

		getCount: function (req, res, next) {
			var isbn = req.params.isbn;
        
	        stock.stockRepository
	            .findOne(isbn)
	            .then(function(results) {
	                
	                //console.log(results === null, Object.prototype.toString.call(results) , Object.prototype.toString.call(results) === "[object Object]");

	                if (results === null) {
	                    res.status(404).send("no stock found in book inventory");
	                } else {
	                    res.json(results);    
	                }
	                
	            }).catch(next);
		}
	}
};