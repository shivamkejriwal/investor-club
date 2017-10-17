import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-section',
    templateUrl: './health-section.component.html',
    styleUrls: [
        './health-section.component.css',
        '../section-components.css'
    ]
})
export class HealthSectionComponent implements OnInit {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Health';
        this.score = .9;
    }

    ngOnInit() {
        const list = this.fundamentals.list;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }

}
