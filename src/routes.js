const express = require('express')
const routes = express.Router()
const DashboardController = require('./controllers/DashboardController')
const CreateController = require('./controllers/CreateController')
const EditController = require('./controllers/EditController')

routes.get('/', DashboardController.index)

routes.get('/create', CreateController.index)
routes.post('/create', CreateController.create)
routes.post('/delete/:id', DashboardController.delete)

routes.get('/edit', EditController.edit)

module.exports = routes 