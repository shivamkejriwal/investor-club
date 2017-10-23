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

router.get('/:stock', (req, res, next) => {
    let id = req.params.stock;
    if (!id) {
        errorHandler(res, 'No ID');
    } else {
        crud.get(id)
        .then((result) => successHandler(res, result))
        .catch((err) => errorHandler(res, err));
    }
});

module.exports = router;
