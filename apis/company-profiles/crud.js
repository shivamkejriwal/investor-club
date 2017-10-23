const _ = require('underscore');
const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();
const kind = 'CompanyProfiles';


let getKey = (ticker) => {
    const key = datastore.key([kind, ticker]);
    return key;
}


let getEntity = (ticker, data) => {
    let key = getKey(ticker);
    const entity = {
        key,
        data
    };
    return entity;
}

let updateCompanyProfiles = (ticker, data) => {
    const entity = getEntity(ticker, data);
    // console.log('updateCompanyProfiles', entity);
    return datastore.save(entity);
}

let createCompanyProfiles = (ticker, data) => {
    return updateCompanyProfiles(ticker, data);
}

let readCompanyProfiles = (ticker) => {
    const key = getKey(ticker);
    return datastore.get(key);
}

let deleteCompanyProfiles = (ticker) => {
    const key = getKey(ticker);
    return datastore.delete(key);
}

let getList = (ticker, limit) => {
    let query = datastore.createQuery(kind)
        .filter('ticker', '=', ticker);
    if (limit) {
        query = query.limit(limit);
    }

    return datastore.runQuery(query)
        .then((results) => {
            const entities = results[0];
            return entities;
        });
}

/*
 * Takes a list of data in the format
 * [{ticker, date, price}, {ticker, date, price}, ...]
 */
let createBatch = (dataList) => {
    const entities = _.map(dataList, (profile) => {
        const id = profile.ticker;
        const entity = getEntity(id, profile);
        return entity;
    });
    console.log(`Created entities:${entities.length}`);
    return new Promise((resolve, reject) => {
        let count = 0;
        let requestChain = [];
        while(entities.length) {
            const batch = entities.splice(0,500);
            requestChain.push(datastore.save(batch));
        }
        console.log(`Created requestChain:${requestChain.length}`);
        Promise.all(requestChain)
            .then((result) => {
                console.log('createBatch-Success');
                resolve(true);
            })
            .catch((err) => {
                console.log('createBatch-Error', err);
                reject(err);
            });

    });
}

module.exports = {
    create: createCompanyProfiles,
    read: readCompanyProfiles,
    update: updateCompanyProfiles,
    delete: deleteCompanyProfiles,
    list: getList,
    createBatch
};
