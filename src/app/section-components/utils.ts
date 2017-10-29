
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


const divide = (a, b) => {
    if (!a) return 0;
    if (!b) return 0;
    const result = parseFloat(a)/parseFloat(b);
    return parseFloat(result.toFixed(8));
};

const Utils = {
    reduce,
    getLastObject,
    divide
};

export { Utils };
