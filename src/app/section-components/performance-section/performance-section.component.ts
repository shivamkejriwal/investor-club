import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js';
import { Utils } from '../utils';

const generateGaugeChart = (key, value, divID) => {
    var ctx = document.getElementById(divID);
    let data = {
        labels: [key, ''],
        datasets: [
                {
                    label: key,
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
        rotation: .75 * Math.PI,
        circumference: 1.5 * Math.PI,
        title: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 0,
                fontStyle: 'bold',
                fontSize: 15,
                generateLabels: () => {
                    return [
                        {
                            text: `${key} : ${value}%`
                        }
                    ]
                }
            }
        }
    };
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
};

@Component({
    selector: 'app-performance-section',
    templateUrl: './performance-section.component.html',
    styleUrls: [
        './performance-section.component.css',
        '../section-components.css'
    ]
})
export class PerformanceSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    @Input() profile:any;
    currentData: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Performance';
        this.score = .6;
        this.currentData = {};
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        if (list.length > 0) {
            this.currentData = Utils.getLastObject(list);
            this.buildPerformanceChart();
            this.buildEarningsChart();
        }

    }

    buildPerformanceChart() {
        const roe = Math.round(this.currentData.ROE * 100);
        const roa = Math.round(this.currentData.ROA * 100);
        const roce = Math.round(this.currentData.ROCE * 100);
        generateGaugeChart('ROE', roe, "roeChart");
        generateGaugeChart('ROA', roa, "roaChart");
        generateGaugeChart('ROCE', roce, "roceChart");
    }

    buildEarningsChart() {
        var ctx = document.getElementById("earningsChart");
        const list = this.fundamentals.list;
        const years = Utils.reduce(list, 'date', (val) => val.split('-')[0]);
        const revenue = Utils.reduce(list, 'REVENUE',(val) => val);
        const netIncome = Utils.reduce(list, 'NETINC', (val) => val);
        var data = {
            labels: years,
            datasets: [
                {
                    label: 'Earnings',
                    data: netIncome,
                    // fill: false,
                    backgroundColor: 'rgba(249, 201, 117, 1)'
                },
                {
                    label: 'Revenue',
                    data: revenue,
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

// V.F's earnings growth is expected to exceed the low risk savings rate of 3.6%
// V.F's earnings growth is positive but not above the US market average.
// V.F's revenue growth is positive but not above the US market average.
// V.F's earnings are expected to grow by 9.2% yearly, however this is not considered high growth (20% yearly).
// V.F's revenue is expected to grow by 6.1% yearly, however this is not considered high growth (20% yearly).
// V.F is expected to perform strongly, Return on Equity (ROE) in 3 years is estimated to be above 20%.
// Performance (ROE) is expected to be above the current US Textiles, Apparel and Luxury Goods industry average.
// An improvement in V.F's performance (ROE) is expected over the next 3 years.
// V.F's year on year earnings growth rate has been positive on average over the past 5 years.
// V.F's 1 year earnings growth is negative, it can't be compared to the 5 year average.
// V.F's 1 year earnings growth is negative, it can't be compared to the US Textiles, Apparel and Luxury Goods industry average.
// Strong return on shareholders funds (ROE > 20%) last year.
// V.F performed above the US Textiles, Apparel and Luxury Goods industry average based on Return on Assets (ROA) last year.
// Performance based on Return on Capital Employed (ROCE) has improved over 3 years.
