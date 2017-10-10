const request = require('request');
const querystring = require('querystring');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });


let paramsToObj = (str) => {
    return querystring.parse(str);
}


let objToParams = (obj) => {
    return querystring.stringify(obj);
}


let getData = (url, params, cb) => {
    let query = objToParams(params);
    request(`${url}?${query}`, { json: true }, cb);
}


module.exports = {
    getData
};
