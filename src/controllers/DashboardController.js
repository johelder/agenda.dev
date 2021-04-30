const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('index', { Contacts: Contacts.get() })
    },

    delete(req, res) {

        const contactId = req.params.id
        let contacts = Contacts.get()

        newContacts = contacts.filter(contact => { return contact.id !== contactId })

        console.log(newContacts)
 
        Contacts.delete(newContacts)
        return res.redirect('/')
    }
}
