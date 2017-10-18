import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro-section',
    templateUrl: './intro-section.component.html',
    styleUrls: [
        './intro-section.component.css',
        '../section-components.css'
    ]
})
export class IntroSectionComponent implements OnInit {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    companyName: string;
    constructor() {
        this.title = 'Intro';
        this.score = .3;
        this.companyName = 'V.F Corporation';
    }

    ngOnInit() {
        const list = this.fundamentals.list;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }

}
