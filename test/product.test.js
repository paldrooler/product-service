'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api/');

describe('Product', function() {
  it('should get all products', function(done) {
    api.get('products')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        var products = res.body;
        expect(products.length).to.be.above(0);
        done();
      });
  });
});
