var stocksApi = require('./stocks/api');
var portfolioApi = require('./portfolios/api');
var watchlistApi = require('./watchlists/api');
var userProfilesApi = require('./user-profiles/api');
var companyProfilesApi = require('./company-profiles/api');

module.exports = {
    stocks : stocksApi,
    portfolio : portfolioApi,
    watchlist : watchlistApi,
    userProfile : userProfilesApi,
    companyProfile : companyProfilesApi,
};
