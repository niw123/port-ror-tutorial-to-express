const express = require('express')
const router = express.Router()
const util = require('util')

router.get('/signup', (req, res, next) => res.render('signup', { title: 'Sign up' }))
router.post('/users', (req, res, next) => {
  console.log(`req.body: ${util.inspect(req.body)}`)
  res.render('user', { 
    name: req.body.name,
    email: req.body.email
  })
})

module.exports = router
