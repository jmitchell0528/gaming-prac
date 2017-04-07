var supertest = require("supertest")
var assert = require("assert")
var app = require("../index")

module.exports = {
  gamelogs_should_exist(done){
    supertest(app)
    .get("/api/gamelogs")
    .end(function(err, response){
      assert.ifError(err)
      assert.ok(!err)
      assert.ok(response.status !== 404)
      done()
    })
  },
  gamelogs_should_return_stuff(done){
    supertest(app)
    .get("/api/gamelogs")
    .expect(200)
    .end(function(err, response){
      assert.ifError(err);
      assert.ok(response.status == 200)
      done()
    })
  },
  gamelogs_should_return_an_array(done) {
    supertest(app)
    .get("/api/gamelogs")
    .expect(200)
    .end(function(err, response) {
      assert.ifError(err);
      assert.ok(response.status == 200)
      assert.ok(Array.isArray(response.body))
      done()
    })
  },
  gamelogs_should_return_an_arrayOfTen(done)  {
    supertest(app)
    .get("/api/gamelogs")
    .expect(200)
    .end(function(err, response)  {
      assert.ifError(err);
      assert.ok(response.status == 200)
      assert.ok(response.body.length === 10)
      done()
    })
  },
  gamelogs_should_accept_data(done){
    supertest(app)
    .post("/api/gamelogs")
    .send({ username: 'DaBest', character:'Kat Alley' , level: 1, time: 36, points: 205})
    .end(function(err, response){
      assert.ifError(err)
      assert.ok(!err)
      assert.ok(response.status !== 404)
      done()
    })
  },
  gamelogs_should_reject_empty_data(done){
    supertest(app)
    .post("/api/gamelogs")
    .send({ username: null, character: null, level: null, time: null, points: null})
    .expect(422)
    .end(function(err, response){
      assert.ifError(err)
      assert.ok(!err)
      done()
    })
  },

}
