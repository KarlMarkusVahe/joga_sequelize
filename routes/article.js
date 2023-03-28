const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const articleAdminController = require('../controllers/admin/article')

router.get('/admin/article/create', (req, res) => {
    res.render('article')
})

router.get('/admin/article/edit/:id', (req, res) => {
    res.render('edit')
})

router.get('/admin/article/delete/:id', (req, res) => {
    res.render('delete')
})

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/author/:author_id', articleController.getArticlesByAuthor)

router.post('/admin/article/create', articleAdminController.createArticle)
router.post('/admin/article/edit/:id', articleAdminController.updateArticle)
router.post('/admin/article/delete/:id', articleAdminController.deleteArticle)

module.exports = router