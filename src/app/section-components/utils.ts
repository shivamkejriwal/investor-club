
const reduce = (list, key, alter) => {
    if (!list) return [];
    return list.reduce((prev, next) => {
        const val = alter(next[key]);
        let old = (prev instanceof Array) ? prev : [alter(prev[key])];
        let result = [val];
        return old.concat(result);
    });
};

const getLastObject = (list) => {
    return (list.length > 0) ? list[list.length - 1] : {};
};




const Utils = {
    reduce,
    getLastObject
};

export { Utils };
