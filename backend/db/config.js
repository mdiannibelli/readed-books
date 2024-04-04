const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./books.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
})

module.exports = db;