import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js';
import Utils from '../utils.js';




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
    @Input() profile:any;
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
        this.currentData = Utils.getLastObject(list);
        this.buildChartA();
        this.buildChartB();
    }

    buildChartA() {
        const roce = this.currentData.ROCE;
        var ctx = document.getElementById("assetLiabilitiesChart");


        var data = {
            labels: [
                "Liabilities",
                "Assets"
            ],
            datasets: [
                {
                    label: 'Short Term',
                    data: [
                        this.currentData.LIABILITIESC,
                        this.currentData.ASSETSC
                    ],
                    backgroundColor: 'rgba(126, 158, 123, 1)' //green
                },
                {
                    label: 'Long Term',
                    data: [
                        this.currentData.LIABILITIESNC,
                        this.currentData.ASSETSNC
                    ],
                    backgroundColor: 'rgba(249, 201, 117, 1)' //yellow
                }
            ]
        };
        var options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: true
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            drawBorder: false,
                            display:false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };
        var chart = new Chart(ctx, {
            type: 'bar',
            data,
            options
        });
    }

    buildChartB() {
        var ctx = document.getElementById("netWorthChart");
        const list = this.fundamentals.list;
        const years = Utils.reduce(list, 'date', (val) => val.split('-')[0]);
        const equity = Utils.reduce(list, 'EQUITY',(val) => val);
        const debt = Utils.reduce(list, 'DEBT', (val) => val);
        var data = {
            labels: years,
            datasets: [
                {
                    label: 'Debt',
                    data: debt,
                    // fill: false,
                    backgroundColor: 'rgba(191, 113, 84, .8)'
                },
                {
                    label: 'Net Worth',
                    data: equity,
                    // fill: false,
                    backgroundColor: 'rgba(126, 158, 123, 1)'
                }

            ]
        };
        var options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: true,
                            beginAtZero: true
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            drawBorder: false,
                            display:false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };
        var chart = new Chart(ctx, {
            type: 'line',
            data,
            options
        });
    }
}

// V.F is able to meet its short term (1 year) commitments with its holdings of cash and other short term assets.
// V.F's cash and other short term assets cover its long term commitments.
// ---- High level of stock/ inventory/ unsold assets.
// Total debt is covered by total short term assets, assets are 1.2x debt.
// V.F's level of debt (90% of total debt) compared to net worth is high (greater than 40%).
// The level of debt compared to net worth has increased over the past 5 years (55.5% vs 90.2% today).
// Total debt is well covered by annual operating cash flow (greater than 20% of total debt).
// Interest on debt is well covered by earnings (EBIT is 18.8x coverage).
