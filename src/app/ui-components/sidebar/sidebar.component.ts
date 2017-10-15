import {
        Component,
        OnInit,
        OnChanges,
        Input
    } from '@angular/core';

import { SiderbarSerivce } from './sidebar.service';
import { Watchlist } from './watchlist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SiderbarSerivce]
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input() sidebarIsOpen:boolean;
    tickers:any;
    watchlist: Watchlist;

    constructor(private service: SiderbarSerivce) {
    }

    getWatchlist() {
        return this.service.getWatchlists()
                .subscribe(watchlist => this.tickers = watchlist.list);
    }

    ngOnInit() {
        console.log(`SidebarComponent`);
        this.getWatchlist();
        this.tickers = [];
        // this.tickers = [
        //     { ticker: 'AAPL', price: 12 },
        //     { ticker: 'GOOGL', price: 20 },
        //     { ticker: 'LB', price: 50.5 },
        //     { ticker: 'MAT', price: 23.5 }
        // ];
    }

    ngOnChanges() {
        console.log(`SidebarComponent-sidebarIsOpen: ${this.sidebarIsOpen}`);
        // console.log('watchlist:', this.watchlist);
    }

}
