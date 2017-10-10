const _ = require('underscore');

const config = require('../../config.js');
const util = require('../utils');
const apiKey = config.quandl.api_key;

const url = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json';
const params = {
    date: '20160912',
    api_key: apiKey
};


let errorHandler = (err) => {
    return console.log(err);
}

let successHandler = (result) => {

    const columns = {};
    _.each(result.datatable.columns, (obj, index) => {
        const key = obj.name;
        columns[key] = index;
    });

    const data = _.map(result.datatable.data, (arr) => {
        const price = parseFloat(arr[columns.adj_close]).toFixed(2);
        return {
            ticker: arr[columns.ticker],
            date: arr[columns.date],
            price
        }
    });
}

let callback = (err, res, body) => {
    if (err) {
        return errorHandler(err);
    }
    successHandler(body);
}

util.getData(url, params, callback);
