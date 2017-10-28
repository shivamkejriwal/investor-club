import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js';
import { Utils } from '../utils';

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
    @Input() profile:any;
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
        if (list.length > 0) {
            this.currentData = Utils.getLastObject(list);
            this.buildPayoutChart();
        }
    }

    buildPayoutChart() {
        const value = Math.round(this.currentData.PAYOUTRATIO * 100);
        var ctx = document.getElementById('payoutChart');
        const labels = ['Dividend Payout', 'Retained Earnings'];
        let data = {
            labels,
            datasets: [
                    {
                        label: 'Dividend Payout',
                        data: [value,100-value],
                        fillOpacity: .3,
                        borderWidth: 1,
                        borderColor: 'white',
                        backgroundColor: [
                            "rgba(126, 158, 123, 1)",
                            "rgba(249, 201, 117, .5)"
                        ]
                    }
            ],
        };
        let options = {
            responsive: true,
            rotation: 2 * Math.PI,
            circumference: 2 * Math.PI,
            title: {
                display: false
            },
            tooltips: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem, chart) => {
                        const index = tooltipItem.index;
                        const data = chart.datasets[0].data;
                        const key  = labels[index];
                        const value = data[index];
                        return `${key}: ${value}%`;
                    },
                }
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        };
        var chart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    }

}


// Paying above low risk savings rate (2.25%).
// Paying below markets top dividend payers (3.18%).
// Dividends per share have been stable in the past 10 years.
// Dividends per share have increased over the past 10 years.
// Dividends paid are covered by net profit (1.7x coverage).
// Dividends after 3 years are expected to be covered by net profit (1.9x coverage).
