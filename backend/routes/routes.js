const express = require('express')
const db = require('../db/config')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Home Page')
})

router.get('/books', (req,res) => {
    let sqliteCheck = `SELECT name FROM sqlite_master WHERE type='table' AND name='books'`
        db.get(sqliteCheck, (err, row) => {
            if(err) {
                return console.error(err.message)
            }
            if(row) {
                let sqliteBook = `SELECT * FROM books`
                db.all(sqliteBook, (err, rows) => {
                    if(err) {
                        return console.error(err.message)
                    }
                    res.send(rows)
                })
            } else {
                let sqliteTable = `CREATE TABLE books(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, year TEXT, dateStarted TEXT, dateFinished TEXT, image BLOB)`
                db.run(sqliteTable, (err) => {
                    if(err) return console.error(err.message);
                    res.send('Table created')
                }) 
            }
        })
   

})

router.get('/books/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let sqliteBookId = `SELECT * FROM books WHERE id = ${id}`
    db.get(sqliteBookId, (err,row) => {
        if(err) return console.error(err.message)
        res.send(row)
    })  
})

router.post('/books', (req,res) => {
    const {title, author, year, dateStarted, dateFinished} = req.body;
    console.log(title, author, year, dateFinished, dateStarted)
    let sqliteAdd = `INSERT INTO books(title, author, year, dateStarted, dateFinished) VALUES(?, ?, ?, ?, ?)`
    db.run(sqliteAdd, [title, author, year, dateStarted, dateFinished], (err) => {
        if(err) return console.error(err.message)
        res.send('Book added')
    })
})

router.delete('/books', (req,res) => {
    let sqliteDelete = `DELETE FROM books`
    db.run(sqliteDelete, (err) => {
        if(err) return console.error(err.message);
        res.send('All books deleted')
    })
})

router.delete('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let sqliteDeleteId = `DELETE FROM books WHERE id = ${id}`
    db.run(sqliteDeleteId, (err) => {
        if(err) return console.error(err.message);
        res.send('Book deleted')
    })
})

module.exports = router;