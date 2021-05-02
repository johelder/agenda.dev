const Contacts = require('../model/Contacts')

module.exports = {
    async index(req, res) {

        const contacts = await Contacts.get()
    
        return res.render('index', { Contacts: contacts })
    },

    async delete(req, res) {

        const contactId = req.params.id
         
        await Contacts.delete(contactId)
        return res.redirect('/')
    }
}
