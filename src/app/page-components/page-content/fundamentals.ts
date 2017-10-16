
export class Fundamentals {
    ticker: string;
    list: any;
}

const MockFundamentals = () => {
    const fundamentals : Fundamentals = {
        ticker: 'VFC',
        list: [
                {
                    "LIABILITIESC":1109475000,
                    "PAYOUTRATIO":0.46564885,
                    "LIABILITIESNC":1486762000,
                    "PB":2.1072172,
                    "BVPS":8.89977319,
                    "DIVYIELD":0.03252682,
                    "PRICE":18.753755137071,
                    "LIABILITIES":2596237000,
                    "ASSETSNC":3631496000,
                    "NETINC":571362000,
                    "SHARESWA":433855888,
                    "ticker":"VFC",
                    "ASSETSC":2826060000,
                    "DPS":0.61,
                    "FCFPS":2.01917739,
                    "ROE":0.14797451,
                    "date":"2010-12-28",
                    "EPS":1.31,
                    "REVENUE":7702589000,
                    "PE":14.31584362,
                    "DEBT":975195000,
                    "FCF":876032000,
                    "DE":0.67238792,
                    "EQUITY":3861219000,
                    "ASSETS":6457556000,
                    "CURRENTRATIO":2.54720476,
                    "ROA":0.0884796
                },
                {
                    "FCF":890375000,
                    "DE":1.05787904,
                    "EQUITY":4525991000,
                    "ASSETS":9313126000,
                    "CURRENTRATIO":1.91349506,
                    "ROA":0.09535885,
                    "LIABILITIESC":1666032000,
                    "PAYOUTRATIO":0.32019704,
                    "LIABILITIESNC":3121919000,
                    "PB":"",
                    "BVPS":10.25252839,
                    "DIVYIELD":"",
                    "LIABILITIES":4787951000,
                    "ASSETSNC":6125182000,
                    "NETINC":888089000,
                    "ticker":"VFC",
                    "SHARESWA":441451204,
                    "ASSETSC":3187944000,
                    "DPS":0.65,
                    "FCFPS":2.01692733,
                    "ROE":0.19621979,
                    "date":"2011-12-31",
                    "EPS":2.03,
                    "REVENUE":9459232000,
                    "PE":"",
                    "DEBT":2116211000
                },
                {
                    "ticker":"VFC",
                    "SHARESWA":440629952,
                    "ASSETSC":3449583000,
                    "DPS":0.76,
                    "FCFPS":2.25170803,
                    "ROE":0.21187641,
                    "date":"2012-12-29",
                    "EPS":2.47,
                    "REVENUE":10879855000,
                    "PE":"",
                    "DEBT":1844598000,
                    "FCF":992170000,
                    "DE":0.87938466,
                    "EQUITY":5125625000,
                    "ASSETS":9633021000,
                    "CURRENTRATIO":1.99143234,
                    "ROA":0.11273712,
                    "LIABILITIESC":1732212000,
                    "PAYOUTRATIO":0.30769231,
                    "LIABILITIESNC":2775184000,
                    "PB":"",
                    "BVPS":11.63249338,
                    "DIVYIELD":"",
                    "LIABILITIES":4507396000,
                    "ASSETSNC":6183438000,
                    "NETINC":1085999000
                },
                {
                    "ticker":"VFC",
                    "SHARESWA":440304828,
                    "ASSETSC":3882982000,
                    "DPS":0.92,
                    "FCFPS":2.6820033,
                    "ROE":0.19912974,
                    "date":"2013-12-28",
                    "EPS":2.76,
                    "REVENUE":11419648000,
                    "PE":"",
                    "DEBT":1450806000,
                    "FCF":1180899000,
                    "DE":0.69744586,
                    "EQUITY":6077038000,
                    "ASSETS":10315443000,
                    "CURRENTRATIO":2.47639,
                    "ROA":0.11731139,
                    "LIABILITIESC":1568001000,
                    "PAYOUTRATIO":0.33333333,
                    "LIABILITIESNC":2670404000,
                    "PB":"",
                    "BVPS":13.80188818,
                    "DIVYIELD":"",
                    "LIABILITIES":4238405000,
                    "ASSETSNC":6432461000,
                    "NETINC":1210119000
                },
                {
                    "NETINC":1047505000,
                    "ticker":"VFC",
                    "SHARESWA":431872268,
                    "ASSETSC":4031569000,
                    "DPS":1.11,
                    "FCFPS":3.38073571,
                    "ROE":0.18602858,
                    "date":"2014-12-28",
                    "EPS":2.42,
                    "REVENUE":11881730000,
                    "PE":"",
                    "DEBT":1439644000,
                    "FCF":1460046000,
                    "DE":0.74844722,
                    "EQUITY":5630882000,
                    "ASSETS":9845300000,
                    "CURRENTRATIO":2.49777363,
                    "ROA":0.10639645,
                    "LIABILITIESC":1614065000,
                    "PAYOUTRATIO":0.45867769,
                    "LIABILITIESNC":2600353000,
                    "PB":"",
                    "BVPS":13.03830419,
                    "DIVYIELD":"",
                    "LIABILITIES":4214418000,
                    "ASSETSNC":5813731000
                },
                {
                    "LIABILITIES":4254704000,
                    "ASSETSNC":5476406000,
                    "NETINC":1231593000,
                    "ticker":"VFC",
                    "SHARESWA":426309081,
                    "ASSETSC":4163136000,
                    "DPS":1.33,
                    "FCFPS":2.07747393,
                    "ROE":0.22871496,
                    "date":"2016-01-02",
                    "EPS":2.9,
                    "REVENUE":12032655000,
                    "PE":"",
                    "DEBT":1854761000,
                    "FCF":885646000,
                    "DE":0.79012665,
                    "EQUITY":5384838000,
                    "ASSETS":9639542000,
                    "CURRENTRATIO":2.14405321,
                    "ROA":0.12776468,
                    "LIABILITIESC":1941713000,
                    "PAYOUTRATIO":0.45862069,
                    "LIABILITIESNC":2312991000,
                    "PB":"",
                    "BVPS":12.63130025,
                    "DIVYIELD":""
                },
                {
                    "DPS":1.53,
                    "FCFPS":3.04041281,
                    "ROE":0.21738983,
                    "date":"2016-12-31",
                    "EPS":2.58,
                    "REVENUE":12019003000,
                    "PE":"",
                    "DEBT":2318898000,
                    "FCF":1257853000,
                    "DE":0.97114809,
                    "EQUITY":4940921000,
                    "ASSETS":9739287000,
                    "CURRENTRATIO":2.40455808,
                    "ROA":0.1102859,
                    "LIABILITIESC":1785400000,
                    "PAYOUTRATIO":0.59302326,
                    "LIABILITIESNC":3012966000,
                    "PB":"",
                    "BVPS":11.9429214,
                    "DIVYIELD":"",
                    "LIABILITIES":4798366000,
                    "ASSETSNC":5446189000,
                    "NETINC":1074106000,
                    "ticker":"VFC",
                    "SHARESWA":413711255,
                    "ASSETSC":4293098000
                }
            ]
    };
    return fundamentals;
}

export { MockFundamentals };