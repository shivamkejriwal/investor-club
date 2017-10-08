import {
        Component,
        OnInit,
        OnChanges,
        Input
    } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input() sidebarIsOpen:boolean;
    tickers:any;

    constructor() { }

    ngOnInit() {
        console.log(`SidebarComponent`);
        this.tickers = [
            { name: 'AAPL', value: 12 },
            { name: 'GOOGL', value: 20},
            { name: 'LB', value: 50.5},
            { name: 'MAT', value: 23.5}
        ];
    }

    ngOnChanges() {
        console.log(`SidebarComponent-sidebarIsOpen: ${this.sidebarIsOpen}`);
    }

}
