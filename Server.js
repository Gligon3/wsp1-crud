const express = require('express')
const nunjucks = require('nunjucks')
const bodyPasrser = require('body-parser')

const artistsRouter = require('./routes/artists')

const app = express()

app.use(bodyPasrser.urlencoded({ extends: false}))
app.use(bodyPasrser.json())

nunjucks.configure('views', {
    autoescape: true,
    express: app,
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.njk', {
        title: "landing page"
    })
})

app.use('/artists', artistsRouter)

app.listen(3000, () => {
    console.log('server is listening on http://localhost:3000')
})