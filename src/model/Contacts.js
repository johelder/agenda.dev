let Contacts = [
    {
        id: 1,
        name: 'Luis',
        lastname: 'Felipe',
        github: 'https://github.com/luisfelipe'
    },

    {
        id: 2,
        name: 'Marcos',
        lastname: 'Antônio',
        github: 'https://github.com/marcosantonio'
    }
]

module.exports = {
    get() {
        return Contacts
    },
    
    create(newContact) {
        Contacts.push(newContact)
    },

    delete(contacts) {
        Contacts = contacts
    }   
}