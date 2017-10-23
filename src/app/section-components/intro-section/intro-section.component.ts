import { Component, Input, OnChanges, ViewChild, ElementRef  } from '@angular/core';
import Chart from 'chart.js';
import Utils from '../utils.js';

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
    @Input() profile:any;
    @ViewChild('polarArea') myChart: ElementRef;
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
        this.currentData = Utils.getLastObject(list);
        this.buildChart();
    }

    buildChart() {
        var ctx = document.getElementById("polarArea");
        let data = {
            labels: [
                'Health',
                'Value',
                'Performance',
                'Dividend',
                'Management'
            ],
            datasets: [{
                data: [5, 3, 7, 8, 9],
                fillOpacity: .3,
                backgroundColor: [
                    "rgba(255, 0, 0, 0.3)",
                    "rgba(100, 255, 0, 0.3)",
                    "rgba(200, 50, 255, 0.3)",
                    "rgba(300, 100, 255, 0.3)",
                    "rgba(0, 100, 255, 0.3)"
                ]
            }],
        };
        let options = {
            responsive: true,
            legend: {
                display: true,
                position: 'left'
            },
            title: {
                display: false,
                text: 'Summary'
            },
            scale: {
                display: true,
                gridLines: {
                    display: false,
                    drawBorder: false,
                    lineWidth: 0
                },
                angleLines: {
                    display: false
                },
                ticks: {
                    display: false,
                    suggestedMax: 10
                }
            }
        };
        var chart = new Chart(ctx, {
            type: 'polarArea',
            data: data,
            options: options
        });
    }

}
