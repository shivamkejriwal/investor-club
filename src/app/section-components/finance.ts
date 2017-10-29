import { Utils } from './utils';

// Present Value (PV)
const PV = (ratePercent, cf1, numOfPeriod) => {
  numOfPeriod = typeof numOfPeriod !== 'undefined' ? numOfPeriod : 1;
  var rate = ratePercent/100, pv;
  pv = cf1 / Math.pow((1 + rate),numOfPeriod);
  return Math.round(pv * 100) / 100;
};

// Future Value (FV)
const FV = (ratePercent, cf0, numOfPeriod) => {
  var rate = ratePercent/100, fv;
  fv = cf0 * Math.pow((1 + rate), numOfPeriod);
  return Math.round(fv * 100) / 100;
};


// Terminal Value (TV)
const TV = (longTermRatePercent, discountRatePercent, finalCF) => {
  const longTermRate = longTermRatePercent/100;
  const discountRate = discountRatePercent/100;
  return Math.round(finalCF * (1 + longTermRate) / (discountRate - longTermRate)) ;
};



// seekZero seeks the zero point of the function fn(x), accurate to within x \pm 0.01. fn(x) must be decreasing with x.
const seekZero = (fn) => {
  var x = 1;
  while (fn(x) > 0) {
    x += 1;
  }
  while (fn(x) < 0) {
    x -= 0.01
  }
  return x + 0.01;
};

// Internal Rate of Return (IRR)
const IRR = (cfs) => {
  var args = cfs;
  var numberOfTries = 1;
  // Cash flow values must contain at least one positive value and one negative value
  var positive, negative;
  Array.prototype.slice.call(args).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  })
  if (!positive || !negative) throw new Error('IRR requires at least one positive value and one negative value');
  function npv(rate) {
    numberOfTries++;
    if (numberOfTries > 1000) {
      throw new Error('IRR can\'t find a result');
    }
    var rrate = (1 + rate/100);
    var npv = args[0];
    for (var i = 1; i < args.length; i++) {
      npv += (args[i] / Math.pow(rrate, i));
    }
    return npv;
  }
  return Math.round(seekZero(npv) * 100) / 100;
};


// Compound Annual Growth Rate (CAGR)
const CAGR = (beginningValue, endingValue, numOfPeriods) => {
  var CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
  return Math.round(CAGR * 10000) / 100;
};


const evaluateDCF = (fundamentals, timeFrame, discountRate, riskFreeRate, estimatedGrowthRate) => {
    const list = fundamentals.list;
    const currentData = Utils.getLastObject(list);
    const prevData = list[list.length - 2];
    const fcf = Utils.reduce(list, 'FCF', (val) => val);
    const pastGrowthRate = Finance.CAGR(fcf[0], currentData.FCF, fcf.length);
    const currentWorkingCapital = currentData.ASSETSC - currentData.LIABILITIESC;
    const previousWorkingCapital = prevData.ASSETSC - prevData.LIABILITIESC;
    const currentValue = currentWorkingCapital
                - previousWorkingCapital
                + Math.abs(currentData.CAPEX)
                + currentData.NETINC;

    const expectedGrowthRate = (estimatedGrowthRate) ? estimatedGrowthRate : pastGrowthRate;
    const sharesOutstanding = currentData.SHARESWA;
    const obligations = currentData.LIABILITIESNC;
    const cash = Math.abs(currentData.NCFF)
                + Math.abs(currentData.NCFI)
                + Math.abs(currentData.NCFO);


    let totalPresentValue = 0;
    for (let year = 1; year <= timeFrame; year++) {
        const futureValue = FV(expectedGrowthRate, currentValue, year);
        const presentValue = PV(discountRate, futureValue, year);
        totalPresentValue = totalPresentValue + presentValue;
    }

    const projectedFutureValue = FV(expectedGrowthRate, currentValue, 5);
    const terminalValue = TV(riskFreeRate, discountRate, projectedFutureValue);
    const presentTerminalValue = PV(discountRate, terminalValue, 5);
    const equityValue = totalPresentValue
                        + presentTerminalValue
                        - obligations;
    const fairValue = Math.round(equityValue / sharesOutstanding * 100) / 100;
    console.log(`DCF`, {
        fcf,
        expectedGrowthRate,
        currentValue,
        projectedFutureValue,
        totalPresentValue,
        terminalValue,
        presentTerminalValue,
        equityValue,
        obligations,
        fairValue,
        cash
    });
    return fairValue
};

// Instantiate a Finance class
const Finance =  {
    IRR,
    CAGR,
    FV,
    PV,
    TV,
    evaluateDCF
};

export default Finance;
