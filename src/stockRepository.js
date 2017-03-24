var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/book_inventory';
var connectionPromise = MongoClient.connect(url, {bufferMaxEntries: 0});
var collectionPromise = connectionPromise.then(function(db) {
    return db.collection('books_km');
});

module.exports = (function () {

	var getCount = function (isbn) {
		
	};

	return {
		stockUp: function (isbn, count) {
			return collectionPromise.then(function(collection) {
		      	return collection.updateOne({isbn: isbn}, {isbn: isbn, count: count}, {upsert: true});
		    });		
		},
		findAll: function() {
			return collectionPromise.then(function(collection) {
		      	return collection.find({}).toArray();
		    });
		},
		findOne: function(isbn) {
			return collectionPromise.then(function(collection) {
		      	return collection.find({"isbn": isbn}).next();
		    });
		}
	}

})();