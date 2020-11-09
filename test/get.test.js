const request = require('supertest')
var assert = require('chai').assert;
var site = 'https://reqres.in/api'
var rotaUsers = '/users?page=2'

describe('GET /users', () => {

    it('should returt the list users', async () => {
        
        var response = await request(site)
        .get(rotaUsers)
        .expect('Content-Type', /json/)
        .expect(200)
       
        var resposta = response.body.data[0]
        assert.equal(resposta.id, 7)
        assert.equal(resposta.email, 'michael.lawson@reqres.in')
        assert.equal(resposta.first_name, 'Michael')
        assert.equal(resposta.last_name, 'Lawson')
        assert.equal(resposta.avatar, 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg')
    })

    it('should returt a single user', async () => {
        
        var response = await request(site)
        .get('/users/2')
        .expect('Content-Type', /json/)
        .expect(200)

        var resposta = response.body
        assert.equal(resposta.data.id, 2)
        assert.equal(resposta.data.email, 'janet.weaver@reqres.in')
        assert.equal(resposta.data.first_name, 'Janet')
        assert.equal(resposta.data.last_name, 'Weaver')
        assert.equal(resposta.data.avatar, 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg')
        assert.equal(resposta.ad.company,'StatusCode Weekly')
        assert.equal(resposta.ad.url,'http://statuscode.org/')
        assert.equal(resposta.ad.text,'A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.')
    })

    it('should return user not found', async () => {
        var response = await request(site)
        .get('/users/23')
        .expect('Content-Type', /json/)
        .expect(404)
    })
})