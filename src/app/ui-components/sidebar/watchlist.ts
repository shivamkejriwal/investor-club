
export class Watchlist {
    username: string;
    id: string;
    list: any;
}

const MockWatchList = () => {
    const watchlist : Watchlist = {
        username: 'shivam',
        id: '123456',
        list: [
            {'price':'1005.65', 'ticker':'GOOGL', 'date':'2017-10-11'},
            {'date':'2017-10-11', 'price':'64.35', 'ticker':'VFC'},
            {'price':'23.66', 'ticker':'HBI', 'date':'2017-10-11'},
            {'date':'2017-10-11', 'price':'41.85', 'ticker':'LB'},
            {'date':'2017-10-11', 'price':'105.00', 'ticker':'PII'},
            {'date':'2017-10-11', 'price':'61.36', 'ticker':'ATVI'},
            {'date':'2017-10-11', 'price':'165.08', 'ticker':'SPG'},
            {'date':'2017-10-11', 'price':'55.66', 'ticker':'WFC'},
            {'date':'2017-10-11', 'price':'108.44', 'ticker':'V'},
            {'date':'2017-10-11', 'price':'98.55', 'ticker':'DIS'},
            {'date':'2017-10-11', 'price':'15.66', 'ticker':'MAT'},
            {'price':'51.03', 'ticker':'NKE', 'date':'2017-10-11'}
        ]
    };
    return watchlist;
}

export { MockWatchList };
