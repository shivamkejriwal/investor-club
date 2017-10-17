import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dividend-section',
    templateUrl: './dividend-section.component.html',
    styleUrls: [
        './dividend-section.component.css',
        '../section-components.css'
    ]
})
export class DividendSectionComponent implements OnInit {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Dividend';
        this.score = .2;
    }

    ngOnInit() {
        const list = this.fundamentals.list;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }


}
