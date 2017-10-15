import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Watchlist } from './watchlist';
import 'rxjs/add/operator/map';

@Injectable()
export class SiderbarSerivce {
    user: string;
    watchlistId: string;
    constructor (private http: Http) {
        this.user = 'shivam';
        this.watchlistId = '123456';
    }

    private extractData = (res: Response) => {
        const response = res.json();
        const data = response.result || [];
        let watchlist : Watchlist = {
            username: this.user,
            id: this.watchlistId,
            list: []
        };
        if (data.length > 0) {
            watchlist.list = data.map((value) => {
                return (value.length > 0) ? value[0] : value;
            });
        }
        console.log('payload', watchlist);
        return watchlist
    }

    getWatchlists(): Observable<Watchlist> {
        const url = `/api/watchlists/${this.user}/${this.watchlistId}/read`;
        return this.http.get(url)
                .map(this.extractData);
    }
}
