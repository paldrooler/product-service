'use strict';

var expect = require('chai').expect;
var app = require('../server/server.js');
var request = require('supertest');

function json(verb, url) {
  return request(app)[verb](url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
}

describe('Product', function() {
  before(function(done) {
    require('./start-server');
    done();
  });

  it('should get all products', function(done) {
    json('get', '/api/products')
      .expect(200, function(err, res) {
        if (err) {
          return done(err);
        }
        var products = res.body;

        // we have pre-primed the file based DB with one entry
        expect(products.length).to.be.above(0);
        done();
      });
  });
});
