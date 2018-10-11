const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => res.render('home', { title: 'Home' }))
router.get('/help', (req, res, next) => res.render('help', { title: 'Help' }))
router.get('/about', (req, res, next) => res.render('about', { title: 'About' }))
router.get('/contact', (req, res, next) => res.render('contact', { title: 'Contact' }))

module.exports = router
