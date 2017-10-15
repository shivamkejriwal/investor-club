const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();
const kind = 'Fundamentals';


let getKey = (ticker, date) => {
    const key = datastore.key([kind, `${ticker}_${date}`]);
    return key;
}


let getEntity = (ticker, date, data) => {
    let key = getKey(ticker, date);
    const entity = {
        key,
        data
    };
    return entity;
}

let updateFundamentals = (ticker, date, data) => {
    const entity = getEntity(ticker, date, data);
    console.log('updateFundamentals', entity);
    return datastore.save(entity);
}

let createFundamentals = (ticker, date, data) => {
    return updateFundamentals(ticker, date, data);
}

let readFundamentals = (ticker, date) => {
    const key = getKey(ticker, date);
    return datastore.get(key);
}

let deleteFundamentals = (ticker, date) => {
    const key = getKey(ticker, date);
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

module.exports = {
    create: createFundamentals,
    read: readFundamentals,
    update: updateFundamentals,
    delete: deleteFundamentals,
    list: getList
};
