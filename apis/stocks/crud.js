const _ = require('underscore');
const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();

// [START config]
// const datastore = Datastore({
//   projectId: config.get('GCLOUD_PROJECT')
// });
const kind = 'Stock';

/*
 * CRUD
 */

let getKey = (id, data) => {
    let key;
    if (data && data.ticker && data.date) {
        key = datastore.key([kind, `${data.ticker}_${data.date}`]);
    }
    else if (id) {
        key = datastore.key([kind, id]);
    } else {
        key = datastore.key(kind);
    }
    return key;
}

let getEntity = (id, data) => {
    let key = getKey(id, data);
    const entity = {
        key,
        data
    };
    return entity;
}


let updateStock = (id, data) => {
    const entity = getEntity(id, data);
    console.log('updateStock', entity);
    return datastore.save(entity);
}

let createStock = (id, data) => {
    return updateStock(id, data);
}

let readStock = (id) => {
    const key = getKey(id);
    return datastore.get(key);
}

let deleteStock = (id) => {
    const key = getKey(id);
    return datastore.delete(key);
}

let getList = (count) => {
    let limit = count ? count : 1;
    const query = datastore.createQuery(kind)
        .limit(limit);

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
    const entities = _.map(dataList, (stock) => {
        const id = stock.ticker;
        const entity = getEntity(id, stock);
        return entity;
    });
    console.log(`Created entities:${entities.length}`);
    return new Promise((resolve, reject) => {
        let count = 0;
        let requestChain = []
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


// readStock('AAPL').then((result)=>{
//     console.log(result);
// });

module.exports = {
    create : createStock,
    read: readStock,
    update: updateStock,
    delete: deleteStock,
    list: getList,
    createBatch
};
