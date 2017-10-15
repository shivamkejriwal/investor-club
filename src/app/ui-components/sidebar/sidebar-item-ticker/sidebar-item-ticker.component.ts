import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item-ticker',
  templateUrl: './sidebar-item-ticker.component.html',
  styleUrls: ['./sidebar-item-ticker.component.css']
})

export class SidebarItemTickerComponent implements OnInit {
    @Input() data;

    constructor() {}

    ngOnInit() {
        let tickerData = this.data;
        // console.log(`name:${tickerData.name} ,value: ${tickerData.value}`);
    }

}
