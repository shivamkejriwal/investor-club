import { Component, Input, OnChanges } from '@angular/core';
import Utils from '../utils.js';

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
        this.currentData = Utils.getLastObject(list);
    }


}


// Paying above low risk savings rate (2.25%).
// Paying below markets top dividend payers (3.18%).
// Dividends per share have been stable in the past 10 years.
// Dividends per share have increased over the past 10 years.
// Dividends paid are covered by net profit (1.7x coverage).
// Dividends after 3 years are expected to be covered by net profit (1.9x coverage).
