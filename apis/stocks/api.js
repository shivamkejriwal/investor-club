const crud = require('./crud');
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
router.get('/', (req, res, next) => {
    crud.list()
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.post('/:stock/add', (req, res, next) => {
    let id = req.params.stock;
    if (!id) {
        errorHandler(res, 'No ID');
    }
    const data = req.body;
    crud.create(id, data)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.get('/:stock', (req, res, next) => {
    let id = req.params.stock;
    if (!id) {
        errorHandler(res, 'No ID');
    }
    crud.read(id)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.post('/:stock/edit', (req, res, next) => {
    let id = req.params.stock;
    if (!id) {
        errorHandler(res, 'No ID');
    }
    const data = req.body;
    crud.update(id, data)
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});

router.get('/:stock/delete', (req, res, next) => {
    let id = req.params.stock;
    if (!id) {
        errorHandler(res, 'No ID');
    }
    crud.delete()
    .then((result) => successHandler(res, result))
    .catch((err) => errorHandler(res, err));
});



module.exports = router;
