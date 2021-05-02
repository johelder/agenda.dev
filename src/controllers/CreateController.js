const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('create')
    },

    async create(req, res) {
        const contacts = await Contacts.get()
        const contact = req.body
        let lastId = contacts[contacts.length - 1]?.id || 1

        

        let newContact = {
            id: lastId + 1,
            ...contact
        }

        await Contacts.create(newContact)
        return res.redirect('/')
    }
}