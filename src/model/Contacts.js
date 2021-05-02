const Database = require('../db/config')

module.exports = {
    async get() {

        const db = await Database()

        const data = await db.all(`SELECT * FROM contacts`)

        await db.close()

        return data
    },
    
    async create(newContact) {
        
        const db = await Database()

        await db.run(`
            INSERT INTO contacts(
                name,
                lastname,
                github
            ) VALUES (
                "${newContact.name}",
                "${newContact.lastname}",
                "${newContact.github}"
            );
        `)

        await db.close()
    },

    async delete(contactId) {
        const db = await Database()

        db.run(`
            DELETE FROM contacts WHERE id = ${contactId}
        `)

        await db.close()
    },
    
    async update(updatedContacts, contactId) {

        const db = await Database()

        await db.run(`UPDATE contacts SET
            name = "${updatedContacts.name}",
            lastname = "${updatedContacts.lastname}",
            github = "${updatedContacts.github}"
            WHERE id = ${contactId}
        `)

        await db.close()
    }
}