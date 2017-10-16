import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
    @Output() toggleEvent = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    toggleSidebar() {
        this.toggleEvent.emit('')
    }

}
