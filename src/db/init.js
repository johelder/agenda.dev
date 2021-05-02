const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`
            CREATE TABLE contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                lastname TEXT,
                github TEXT
            )
        `)

        await db.run(`
            INSERT INTO contacts (
                name,
                lastname,
                github
            ) VALUES (
                "Johelder",
                "Humberto",
                "https://github.com/johelder"
            );
        `)

        await db.close()
    }
}

initDb.init()