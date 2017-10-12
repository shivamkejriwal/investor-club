const crud = require('./crud');
const stockCrud = require('../stocks/crud');
const express = require('express');
const router = express.Router();


let sendResponse = (res, response) => {
    res.json(response);
}

let successHandler = (res, result) => {
    const response = {
        status: 'success',
        result: result
    }
    sendResponse(res, response);
}

let errorHandler = (res, error) => {
    const response = {
        status: 'error',
        error: error
    }
    sendResponse(res, response);
}

/*
 * Return a list of data
 */
router.get('/:user', (req, res, next) => {
    let user = req.params.user;
    if (!user) {
        errorHandler(res, 'No User');
    }
    crud.list(user)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.post('/:user/:id/add', (req, res, next) => {
    let user = req.params.user;
    let id = req.params.id;
    if (!user) {
        errorHandler(res, 'No User');
    }
    if (!id) {
        errorHandler(res, 'No ID');
    }
    const data = req.body;
    crud.create(user, id, data)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.get('/:user/:id', (req, res, next) => {
    let user = req.params.user;
    let id = req.params.id;
    if (!user) {
        errorHandler(res, 'No User');
    }
    if (!id) {
        errorHandler(res, 'No ID');
    }
    crud.read(user, id)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.get('/read/:user/:id', (req, res, next) => {
    let user = req.params.user;
    let id = req.params.id;
    if (!user) {
        errorHandler(res, 'No User');
    }
    if (!id) {
        errorHandler(res, 'No ID');
    }


    crud.read(user, id)
    .then((result) => {
        let requestChain = [];
        _.each(result[0].list,(ticker) => {
            requestChain.push(stockCrud.read(ticker));
        });
        return Promise.all(requestChain);
    })
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.post('/:user/:id/edit', (req, res, next) => {
    let user = req.params.user;
    let id = req.params.id;
    if (!user) {
        errorHandler(res, 'No User');
    }
    if (!id) {
        errorHandler(res, 'No ID');
    }
    const data = req.body;
    crud.update(user, id, data)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.get('/:user/:id/delete', (req, res, next) => {
    let user = req.params.user;
    let id = req.params.id;
    if (!user) {
        errorHandler(res, 'No User');
    }
    if (!id) {
        errorHandler(res, 'No ID');
    }
    crud.delete(user, id)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});



module.exports = router;
