const express = require('express')
const router = express.Router()

const pool = require('../db')

// get /artists
router.get('/', async (req, res) => {

    const [artists] = await pool.promise().query('SELECT * FROM william_artists')

    console.log(artists)

    res.render('artists.njk', {
        title: 'All artists',
        artists
    })
})

router.get('/new', (req, res) => {
    res.render('newartist.njk', {
        title: 'Create new artist',
    })
})

router.post('/new', (req, res) => {
    console.log(req.body.name)

    res.send('form posted')
})

// get /artists/:id
router.get('/:id', async (req, res) => {
    const id = parserInt(req.params.id)
    if (Number.isInteger(id)
    ) {
        //använd id hämta från databas

        const [artist] = await pool.promise().query('SELECT * FROM William_artist WHERE id = ?',
            [id])

        res.render('artist.njk', {
            title: artist[0].name,
            artist: artist[0]
        })
    } else {
        //medela användaren att något är fel
        const count = 5;
        console.log('id är inte en int: ', id)
        res.redirect('/artists')
    }
})


module.exports = router