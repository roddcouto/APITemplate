const request = require('supertest')
var assert = require('chai').assert;
var site = 'https://reqres.in/api'
var rotaUsers = '/users'

describe('POST /users', () => {

    it('should create a new user', async () => {
        
        var response = await request(site)
        .post(rotaUsers)
        .send({
            'name': 'morpheus',
            'job': 'leader'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
       
        var resposta = response.body
        assert.equal(resposta.name, 'morpheus')
        assert.equal(resposta.job, 'leader')
    })

    it('should return valid register', async () => {
        
        var response = await request(site)
        .post('/register')
        .send({
            'email': 'eve.holt@reqres.in',
            'password': 'pistol'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

        var resposta = response.body
        assert.equal(resposta.id, 4)
        assert.equal(resposta.token, 'QpwL5tke4Pnpja7X4')
    })

    it('should return invalid register', async () => {
        
        var response = await request(site)
        .post('/register')
        .send({
            'email': 'sydney@fife'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)

        var resposta = response.body
        assert.equal(resposta.error, 'Missing password')
    })

    it('should return valid login', async () => {
        
        var response = await request(site)
        .post('/login')
        .send({
            'email': 'eve.holt@reqres.in',
            'password': 'cityslicka'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

        var resposta = response.body
        assert.equal(resposta.token, 'QpwL5tke4Pnpja7X4')
    })

    it('should return invalid login', async () => {
        
        var response = await request(site)
        .post('/login')
        .send({
            'email': 'peter@klaven' 
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)

        var resposta = response.body
        assert.equal(resposta.error, 'Missing password')
    })
})