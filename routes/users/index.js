const express = require('express');

const router = express.Router();

module.exports = () => {

    router.get('/login', (request, response) => {
        response.render('pages/login', {
            pageTitle: 'Connexion'
        });
    });

    router.get('/signup', (request, response) => {
        response.render('pages/signup', {
            pageTitle: 'Inscription'
        });
    });

    return router;
}