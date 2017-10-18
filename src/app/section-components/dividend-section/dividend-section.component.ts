import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-dividend-section',
    templateUrl: './dividend-section.component.html',
    styleUrls: [
        './dividend-section.component.css',
        '../section-components.css'
    ]
})
export class DividendSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Dividend';
        this.score = .2;
        this.currentData = {};
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }


}
