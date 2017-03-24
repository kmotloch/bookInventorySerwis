const request = require('supertest');
const stock = require('../src/memoryStockRepository')();
const app = require('../src/index')(stock);

describe('book inventory', function() {
	it('allows to sotck up the items' , function(done) {

	    request(app)
		    .post('/stock')
		    .send({isbn: '123', count: 10})
		    .expect({isbn: '123', count: 10}, done);
  	});	
});