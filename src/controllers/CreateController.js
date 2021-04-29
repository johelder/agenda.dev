const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('create')
    },

    create(req, res) {
        const contacts = Contacts.get()
        const contact = req.body
        let id

        contacts.length === 0 ? id = 1 : id = contacts.length + 1

        let newContact = {
            id,
            ...contact
        }

        Contacts.set(newContact)
        return res.redirect('/')
    }
}