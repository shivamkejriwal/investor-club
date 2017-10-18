import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-value-section',
    templateUrl: './value-section.component.html',
    styleUrls: [
        './value-section.component.css',
        '../section-components.css'
    ]
})
export class ValueSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Value';
        this.score = .6;
        this.currentData = {};
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }

}
