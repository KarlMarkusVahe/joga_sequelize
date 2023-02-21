const express = require("express")
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequalize')

sequelize
    .authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch(err => {
        console.error('Unable to connect to database', err)
    })

app.get("/", (req, res) => {
    res.json({message: "Welcome"})
})

app.listen(3000, () => {
    console.log('Server is running')
})