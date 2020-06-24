const express = require('express');

const users = require('./users');

const router = express.Router();

module.exports = () => {

    router.get('/', (request, response) => {
        response.render('pages/index', {
            pageTitle: 'Accueil'
        });
    });

    router.use('/users', users());

    return router;
}