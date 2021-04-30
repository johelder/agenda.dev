const Contacts = require('../model/Contacts')

module.exports = {
    edit(req, res) {

        const contactId = req.params.id
        const contacts = Contacts.get()

        const currentContact = contacts.find(contact => { return Number(contact.id) === Number(contactId) })

        return res.render('edit', { contact: currentContact })
    },

    save(req, res) {
        const contactId = req.params.id
        let contacts = Contacts.get()

        let currentContact = contacts.find(contact => { return Number(contact.id) === Number(contactId) })
        
        currentContact = {
            id: req.params.id,
            name: req.body.name,
            lastname: req.body.lastname,
            github: req.body.github
        }

        contacts.splice(contactId - 1, 1, currentContact)

        Contacts.update(contacts)

        return res.redirect('/')
    }
}