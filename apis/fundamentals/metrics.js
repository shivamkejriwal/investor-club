const PE = (price, eps) => {
    if (!price) return '';
    if (!eps) return '';
    const result = parseFloat(price)/parseFloat(eps);
    return parseFloat(result.toFixed(8));
}

const PB = (price, bvps) => {
    if (!price) return '';
    if (!bvps) return '';
    const result = parseFloat(price)/parseFloat(bvps);
    return parseFloat(result.toFixed(8));
}

const DIVYIELD = (dps, price) => {
    if (!dps) return '';
    if (!price) return '';
    const result = parseFloat(dps)/parseFloat(price);
    return parseFloat(result.toFixed(8));
}

const PAYOUTRATIO = (dps, eps) => {
    if (!dps) return '';
    if (!eps) return '';
    const result = parseFloat(dps)/parseFloat(eps);
    return parseFloat(result.toFixed(8));
}

const ROE = (netIncome, equity) => {
    if (!netIncome) return '';
    if (!equity) return '';
    const result = parseFloat(netIncome)/parseFloat(equity);
    return parseFloat(result.toFixed(8));
}

const ROA = (netIncome, assets) => {
    if (!netIncome) return '';
    if (!assets) return '';
    const result = parseFloat(netIncome)/parseFloat(assets);
    return parseFloat(result.toFixed(8));
}

const populate = (data) => {
    data.PE = PE(data.PRICE, data.EPS);
    data.PB = PE(data.PRICE, data.BVPS);
    data.DIVYIELD = PE(data.DPS, data.PRICE);
    data.PAYOUTRATIO = PE(data.DPS, data.EPS);
    data.ROE = PE(data.NETINC, data.EQUITY);
    data.ROA = PE(data.NETINC, data.ASSETS);
}

module.exports = {
    populate
};
