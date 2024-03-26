const mysql = require('mysql2') 676.4k (gzipped: 296.3k)

const pool = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    charset: 'utf8mb4',
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    port: prtocess.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
})

module.exports = pool 