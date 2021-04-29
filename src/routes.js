const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.render('index')
})

routes.get('/create', (req, res) => {
    return res.render('create')
})

routes.get('/edit', (req, res) => {
    return res.render('edit')
})

module.exports = routes 