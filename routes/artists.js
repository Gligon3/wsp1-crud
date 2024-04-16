const express = require('express')
const router = express.Router()

const pool = require('../db')

// get /artists
router.get('/', (req, res) => {
   
   
   
    res.render('artists.njk', {
        title: 'All artists'
    })
})

// get /artists/:id
router.get('/:id', (req, res) => {
    res.send("artist")
})

module.exports = router