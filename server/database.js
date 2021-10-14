const pgp = require('pg-promise')()

const cn = process.env.DB_CONNECTION

const db = pgp(cn)

module.exports = db