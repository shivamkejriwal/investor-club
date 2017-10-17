import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-performance-section',
    templateUrl: './performance-section.component.html',
    styleUrls: [
        './performance-section.component.css',
        '../section-components.css'
    ]
})
export class PerformanceSectionComponent implements OnInit {
    @Input() fundamentals:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Performance';
        this.score = .6;
    }

    ngOnInit() {
        const list = this.fundamentals.list;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
    }


}
