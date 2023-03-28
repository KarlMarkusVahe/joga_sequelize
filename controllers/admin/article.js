const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        //left one - data table fields
        //right one - data from form
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T',' ')
    })
        .then(article => {
            console.log(article)
            return res.status(200).json({ message: 'New article is added' })
    })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

const updateArticle = (req, res) => {
        let name = req.body.name
        let slug = req.body.slug
        let image = req.body.image
        let body = req.body.body
        let author = req.body.author_id
        models.Article.update({
            name: name,
            slug: slug,
            image: image,
            body: body,
            author_id:author,
            updatedAt: new Date().toISOString().slice(0,19).replace('T',' ')
        },{
            where:{id: req.params.id}
        })
            .then(articles => {
                console.log(articles)
                return res.status(200).json({message: "New article"})
            })
            .catch(error => {
                return res.status(500).send(error.message)
            })
}

const deleteArticle = (req, res) => {
        models.Article.destroy({
            where: {id: req.params.id}
        })
            .then(articles => {
                console.log(articles)
                return res.status(200).json({message: "Article was deleted"})
            })
            .catch(error => {
                return res.status(500).send(error.message)
            })
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
}