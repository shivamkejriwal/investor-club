import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CompanyProfiles, MockCompanyProfiles } from './companyProfiles';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyProfilesSerivce {
    ticker: string;
    constructor (private http: Http) {
    }

    private extractData = (res: Response) => {
        const response = res.json();
        const result = response.result || [];
        const data = (result.length>0) ? result[0]: {}
        console.log('payload-CompanyProfilesSerivce', data);
        let companyProfiles  = new CompanyProfiles(data);
        console.log('payload', companyProfiles);
        return companyProfiles
    }

    getCompanyProfiles(ticker): Observable<CompanyProfiles> {
        this.ticker = ticker;
        if (!environment.production) {
            // return mockdata if not in production
            const companyProfiles = MockCompanyProfiles();
            console.log('MockCompanyProfiles', companyProfiles);
            return Observable.of(companyProfiles);
        }

        const url = `/api/companyProfiles/${ticker}`;
        return this.http.get(url)
                .map(this.extractData);
    }
}
