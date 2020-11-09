const request = require('supertest')
var assert = require('chai').assert;
var site = 'https://reqres.in/api'
var rotaUsers = '/users/2'

describe('DELETE /users', () => {

    it('should delete the selected user', async () => {
        
        var response = await request(site)
        .delete(rotaUsers)
        .expect(204)
    })

})