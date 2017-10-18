import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-intro-section',
    templateUrl: './intro-section.component.html',
    styleUrls: [
        './intro-section.component.css',
        '../section-components.css'
    ]
})
export class IntroSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    companyName: string;
    constructor() {
        this.title = 'Intro';
        this.score = .3;
        this.companyName = 'V.F Corporation';
        this.currentData = {};
    }

    ngOnChanges() {
        console.log('IntroSectionComponent-fundamentals',this.fundamentals);
        const list = this.fundamentals.list || [];
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }

}
