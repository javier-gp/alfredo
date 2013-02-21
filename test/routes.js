var request = require('supertest'),
    index = require('../routes'),
    app = require('../app.js');

describe('Routes', function (){
    it('should have correct route and status when going to /index', function(done){
        request(app).get('/').expect(200, done);
    });
    it('should have correct route and status when going to /videos', function(done){
        request(app).get('/videos').expect(200, done);
    });
});
