const Contacts = require('../model/Contacts')

module.exports = {
    async edit(req, res) {

        const contactId = req.params.id
        const contacts = await Contacts.get()

        const currentContact = contacts.find(contact => Number(contact.id) === Number(contactId))

        return res.render('edit', { contact: currentContact })
    },

    async save(req, res) {
        const contactId = req.params.id

        updatadedContact = {
            name: req.body.name,
            lastname: req.body.lastname,
            github: req.body.github
        }
        

        await Contacts.update(updatadedContact, contactId)

        return res.redirect('/')
    }
}