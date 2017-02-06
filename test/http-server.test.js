// get our dependencies
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
// register the plugin with chai using .use
chai.use(chaiHttp);

const server = require('../lib/http-server');
// if I build a class instead...?


describe('testing http server with chai-http', () => {

    const request = chai.request(server);

    it('GET / says "hello <name>" ', done => {
        request
            .get('/greeting')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello stranger');
                done();
            });
    });


});