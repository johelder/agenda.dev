const Contacts = require('../model/Contacts')

module.exports = {
    index(req, res) {
        return res.render('index', { Contacts: Contacts.get() })
    }
}
