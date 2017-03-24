const stock = require('../src/stockRepository');
var app = require('./index')(stock);
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port 3000!' , port);
});