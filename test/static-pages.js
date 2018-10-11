const jsdom = require('jsdom').JSDOM

const chai = require('chai'),
  should = chai.should(),
  expect = chai.expect

const server = require('../app')

chai.use(require('chai-http'))

describe('Static pages', () => {

  const baseTitle = 'Express Sample App'

  function getJsdomDocument(res) {
    return new jsdom(res.text).window.document
  }

  describe('Home', () => {
    it('should get home', done => {
      chai.request(server).get('/')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.html
          const document = getJsdomDocument(res)
          expect(document.querySelector('title').text)
            .to.equal(`Home | ${baseTitle}`)
          done()
        })
    })
  })

  describe('Help', () => {
    it('should get help', done => {
      chai.request(server).get('/help')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.html
          const document = getJsdomDocument(res)
          expect(document.querySelector('title').text)
            .to.equal(`Help | ${baseTitle}`)
          done()
        })
    })
  })

  describe('About', () => {
    it('should get about', done => {
      chai.request(server).get('/about')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.html
          const document = getJsdomDocument(res)
          expect(document.querySelector('title').text)
            .to.equal(`About | ${baseTitle}`)
          done()
        })
    })
  })

  describe('Contact', () => {
    it('should get contact', done => {
      chai.request(server).get('/contact')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.html
          const document = getJsdomDocument(res)
          expect(document.querySelector('title').text)
            .to.equal(`Contact | ${baseTitle}`)
          done()
        })
    })
  })
})
