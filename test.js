var assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe ('GET /users',function(){
		it('test success users',function(done){
				request(app)
				.get('/users?id=0')
				.set('accept', 'application/json')
				.expect(200)
				.end(function(err, res){
					if(err) return done(err);
					done();
			});
		});
  });
