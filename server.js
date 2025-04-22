const express = require('express')
const app = express()

const cors = require('cors')
//enable all client access + all methods (post, put,....)
app.use(cors())

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const mongoose = require ('mongoose')
const db = "mongodb://localhost:27017/vocab-builder"
mongoose.connect(db)
    .then(() => console.log('success'))
.catch((err) => console.error('failure: ' + err))
const router = require('./api/routes/VocabRoute')
router(app)
    
app.get('/demo', (req, res) => {
    res.send("<h1>Demo Page</h1>")
})
const port = 1108
app.listen(port, () => {
    console.log("Sever started at http://localhost:" + port)
})


