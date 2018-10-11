const jsdom = require('jsdom').JSDOM

process.env.NODE_ENV = 'test';

const chai = require('chai'),
  should = chai.should(),
  expect = chai.expect

const server = require('../app')
const mongoose = require('mongoose'), 
  User = mongoose.model('User') 

chai.use(require('chai-http'))

describe('Users', () => {

  describe('Signup page', () => {
    it('gets signup page', done => {
      chai.request(server).get('/signup')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.html
          done()
        })
    })
  })

  function shouldThrowError(err, done) {
    if (err) { return done(); }
    throw new Error('User should not have been saved')
  }

  describe('User model', () => {

    beforeEach(done => {
      const user = User({ name: "Valid User", email: "user@example.com" })
      user.save(done)
    })
    afterEach(done => {
      User.collection.drop()
      done()
    })

    it('save valid user', done => {
      const user = User({ name: "Steven Seagal", email: "blood@bank.com" })
      user.save(done)  
    })

    it('user should have name present', done => {
      User({ name: "", email: "login@example.com" })
        .save(err => shouldThrowError(err, done))
    })

    it('user should have email present', done => {
      User({ name: "Steven", email: "       " })
        .save(err => shouldThrowError(err, done))
    })

    it('name should not be too long', done => {
      User({ name: "A".repeat(51), email: "login@example.com" })
        .save(err => shouldThrowError(err, done))
    })

    it('email should not be too long', done => {
      User({ name: "A Guy", email: "A".repeat(244) + "@example.com" })
        .save(err => shouldThrowError(err, done))
    })

    it('email validations should accept valid addresses', done => {
      done(new Error('implement me'))
    })

    it('email validations should reject invalid addresses', done => {
      done(new Error('implement me'))
    })
    
    it('email addresses should be unique', done => {
      User({ name: "Not Unique", email: "user@example.com" })
        .save(err => shouldThrowError(err, done))
    })

    it('email addresses should saved in lowercase', done => {
      done(new Error('implement me'))
    })
  })
})

