import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-management-section',
    templateUrl: './management-section.component.html',
    styleUrls: [
        './management-section.component.css',
        '../section-components.css'
    ]
})
export class ManagementSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Management';
        this.score = .3;
        this.currentData = {};
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }


}
