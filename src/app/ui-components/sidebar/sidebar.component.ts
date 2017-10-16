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

    constructor(private service: SiderbarSerivce) {
        this.tickers = [];
    }

    getWatchlist() {
        return this.service.getWatchlists()
                .subscribe((watchlist) => {
                    this.tickers = watchlist.list
                });
    }

    ngOnInit() {
        console.log(`SidebarComponent`);
        this.getWatchlist();
    }

    ngOnChanges() {
        console.log(`SidebarComponent-sidebarIsOpen: ${this.sidebarIsOpen}`);
    }

}
