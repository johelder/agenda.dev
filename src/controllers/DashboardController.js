const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('index', { Contacts: Contacts.get() })
    },

    delete(req, res) {

        const contactId = req.params.id
        contacts = Contacts.get()

        let newContacts = []

        contacts.forEach(contact => {
            Number(contact.id) !== Number(contactId) ? newContacts.push(contact) : contact
        })
        
        Contacts.delete(newContacts)
        return res.redirect('/')
    }
}
