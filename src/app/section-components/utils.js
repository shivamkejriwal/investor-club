
const reduce = (list, key, alter) => {
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

export default {
    reduce,
    getLastObject
};
