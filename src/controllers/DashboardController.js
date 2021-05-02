const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('index', { Contacts: Contacts.get() })
    },

    delete(req, res) {

        const contactId = req.params.id
        let contacts = Contacts.get()

        newContacts = contacts.filter(contact =>  Number(contact.id) !== Number(contactId))
         
        Contacts.delete(newContacts)
        return res.redirect('/')
    }
}
