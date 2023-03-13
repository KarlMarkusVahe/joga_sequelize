const express = require("express")
const app = express()
const path = require('path')
const hbs = require('express-handlebars')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))

const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch(err => {
        console.error('Unable to connect to database', err)
    })

const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)
app.use('/author', articleRouter)
app.use('/admin/article', articleRouter)

app.listen(3000, () => {
    console.log('Server is running')
})