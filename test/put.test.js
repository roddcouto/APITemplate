const request = require('supertest')
var assert = require('chai').assert;
var site = 'https://reqres.in/api'
var rotaUsers = '/users/2'

describe('PUT /users', () => {

    it('should update the user job with put request', async () => {
        
        var response = await request(site)
        .put(rotaUsers)
        .send({
            'name': 'morpheus',
            'job': 'zion resident'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
       
        var resposta = response.body
        assert.equal(resposta.name, 'morpheus')
        assert.equal(resposta.job, 'zion resident')
    })
})