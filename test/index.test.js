const expect = require('chai').expect;
const getProject = require('../index').getProject;
const nock = require('nock')
const mock_response = require('./response')

describe('First test', ()=>{
    it('should assert to be true', ()=>{
        expect(true).to.be.true;
    });
});  

describe('Get Mocked user info', ()=>{
    beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/[xxxx]')
      .reply(200, mock_response);
  });
    it('Get user name ', ()=>{
        return getProject('[xxxx]')
        .then(response =>{
            console.log(response.data)
            // console.log(typeof response)
            expect(typeof response ).to.equal('object');
            expect(response.login).to.equal('[xxxx]')
            expect(response.id).to.equal('[yyyy]')
            expect(response.type).to.equal('User')
        })
        .catch( error =>{
            console.log(error)
        })
    })
});
