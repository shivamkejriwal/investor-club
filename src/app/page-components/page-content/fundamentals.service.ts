import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Fundamentals, MockFundamentals } from './fundamentals';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class FundamentalsSerivce {
    ticker: string;
    constructor (private http: Http) {
    }

    private extractData = (res: Response) => {
        const response = res.json();
        const data = response.result || [];
        let fundamentals : Fundamentals = {
            ticker: this.ticker,
            list: data
        };
        if (data.length > 0) {
            fundamentals.list = data.map((value) => {
                return (value.length > 0) ? value[0] : value;
            });
        }
        console.log('payload', fundamentals);
        return fundamentals
    }

    getFundamentals(ticker): Observable<Fundamentals> {
        this.ticker = ticker;
        if (!environment.production) {
            // return mockdata if not in production
            const fundamentals = MockFundamentals();
            console.log('MockFundamentals', fundamentals);
            return Observable.of(fundamentals);
        }

        const url = `/api/fundamentals/${ticker}`;
        return this.http.get(url)
                .map(this.extractData);
    }
}
