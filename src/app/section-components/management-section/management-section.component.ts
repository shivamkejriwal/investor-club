import { Component, Input, OnChanges } from '@angular/core';
import { Utils } from '../utils';

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
    @Input() profile:any;
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
        if (list.length > 0) {
            this.currentData = Utils.getLastObject(list);
        }
    }


}


// Steve's compensation has increased by more than 20% in the past year.
// Steve's compensation appears reasonable.
// The tenure for the V.F management team is about average.
// The tenure for the V.F board of directors is about average.
