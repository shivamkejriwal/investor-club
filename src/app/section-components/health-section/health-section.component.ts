import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-health-section',
    templateUrl: './health-section.component.html',
    styleUrls: [
        './health-section.component.css',
        '../section-components.css'
    ]
})
export class HealthSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Health';
        this.score = .9;
        this.currentData = {};
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }

}
