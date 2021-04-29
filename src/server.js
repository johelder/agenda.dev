const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

server.use(routes)
server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')


server.listen(8000, () => console.log('server is running'))