import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {
    sidebarIsOpen: boolean = false;
    pageData: string = '';

    constructor() {
        // this.sidebarIsOpen = false;
    }

    ngOnInit() {
      console.log('PageBodyComponent');
    }

    toggleSidebar() {
        this.sidebarIsOpen = !this.sidebarIsOpen;
        console.log(`toggleSidebar: ${this.sidebarIsOpen}`);
    }

    selectInSidebar($event) {
        console.log('Selected', $event);
        this.pageData = $event;
    }

    receiveMessage($event) {
        this.toggleSidebar();
    }
}
