var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var error = require('./controllers/error');
var stockRepository = require('./stockRepository');


module.exports = function (stock) {
    var app = express();
    var routes = require('./controllers/routes')({stockRepository: stockRepository});

    // middleware - cross cutting concerns
    app.use(middleware.logRequest);
    app.use(middleware.auth);
    app.use(bodyParser.json());

    // handler/routes
    app.get('/',routes.hello);
    app.post('/stock',routes.stockUp);
    app.get('/stock', routes.findAll);
    app.get('/stock/:isbn', routes.getCount);

    app.get('/error', function (req, res) {
        throw new Error('forced error');
    });

    // error handling
    app.use(error.clientError);
    app.use(error.serverError);

    return app;
};