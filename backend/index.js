const express = require('express');
const router = require('./routes/routes');
const cors = require('cors')
const app = express()
const PORT = 3000;
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})