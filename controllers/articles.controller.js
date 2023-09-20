const { response, request } = require('express')

const Article = require('../models/articles.model')

const articleGet = async(req = require, res = response) => {
    try {
        const articuloDisp = {state:true};
        const { limite = 10 } = req.query;
        const cantidadArticulos = await Article.coundDocuments();
        const articulo = await Article.find(articuloDisp).limit(Number(limite));
        res.status(200).json({
            total:cantidadArticulos,
            articulo
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas artículos.',
            error
        })
    }
}

const articlePost = async(req = require, res = response) => {
    try {
        const { nombre, precio, existencias, state } = req.body
        const data ={nombre, precio, existencias, state}
    
        const article = new Article(data)
        await article.save()
        res.status(200).json({
            message: 'Artículo se ha creado.',
            article
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando creabas un artículo.',
            error
        })
    }
}

const articlePut = async(req = require, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, existencias, state }  = req.body;
        const data = { nombre, precio, existencias, state } 

        const user = await Article.findByIdAndUpdate(id, data)
        res.status(200).json({
            message: 'Artículo se ha actualizado.',
            article
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando editabas un artículo.',
            error
        })
    }
}

const articleDel = async(req = require, res = response) => {
    try {
        const { id } = req.params
        const falseState = {state:false}
        const article = await Article.findByIdAndUpdate(id, falseState)

        res.status(200).json({
            message: 'Artículo se ha eliminado.',
            article
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando borrabas un artículo.',
            error
        })
    }
}

module.exports = {
    articleGet,
    articlePost,
    articlePut,
    articleDel
}