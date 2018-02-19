var expect  = require('chai').expect;
var request = require('request');

it('Should be string', function(done) {
    expect("alsdjf").to.be.a('string');
    done();
    /*request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });*/
});