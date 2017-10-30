import { Component, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import Finance from '../finance';
import { Utils } from '../utils';


@Component({
    selector: 'app-value-section',
    templateUrl: './value-section.component.html',
    styleUrls: [
        './value-section.component.css',
        '../section-components.css'
    ]
})
export class ValueSectionComponent implements OnChanges {
    @Input() fundamentals:any;
    @Input() profile:any;
    @ViewChild('myChart') myChart: ElementRef;
    currentData: any;
    charts: any;
    title: string;
    score: number;
    constructor() {
        this.title = 'Value';
        this.score = .6;
        this.currentData = {};
        this.charts = [];
    }

    destroy() {
        this.charts.forEach(chart => {
            chart.destroy();
        });
    }

    evaluateDCF() {
        const sector = this.profile.secto;
        const growthOfMarket = 8.5;
        const riskFreeRate = 2.5;

        const timeFrame = 5;
        const risk = 1.8;
        const discountRate = (sector === 'Financial') ? growthOfMarket + riskFreeRate : growthOfMarket;
        const growthRate = (sector === 'Financial') ? riskFreeRate : '';

        const underValued  = Finance.evaluateDCF(this.profile, this.fundamentals, timeFrame, discountRate + risk, riskFreeRate, growthRate);
        const fairValue  = Finance.evaluateDCF(this.profile, this.fundamentals, timeFrame, discountRate, riskFreeRate, growthRate);
        const overValued  = Finance.evaluateDCF(this.profile, this.fundamentals, timeFrame, discountRate - risk, riskFreeRate, growthRate);
        const result = {
            underValued, fairValue, overValued
        };

        console.log('evaluateDCF', result);
        return result;

    }

    buildChart() {
        var ctx = document.getElementById("myChart");
        let data = {
            labels: [
                "Future Cash Flow Value",
                "Current Share Price"
            ],
            datasets: [
                {
                    label: "Test",
                    data: [100, 75],
                    backgroundColor: ["#669911", "#119966" ],
                    hoverBackgroundColor: ["#66A2EB", "#FCCE56"]
                }
            ]
        };
        let options = {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display:false
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    title: (tooltipItem, chart) => {
                        const item = tooltipItem[0];
                        return '';
                    },
                    label: (tooltipItem, chart) => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                }
            }
        };
        var chart = new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: options
        });
        this.charts.push(chart);
    }

    buildMixedCart() {
        var ctx = document.getElementById("myChart");
        const values = this.evaluateDCF();
        const max = values.overValued + 20;
        const fairValuedMax = values.overValued;
        const underValuedMax = values.underValued;
        const fairValue = values.fairValue;
        const rand = (Math.random() - 0.5) * 100;
        const currentValue = Math.round(fairValue + rand);
        let data = {
            labels: [
                "Fair Value",
                "Share Price"
            ],
            datasets: [
                {
                    type: 'bar',
                    label: 'Prices',
                    data: [fairValue, currentValue],
                    backgroundColor: 'rgba(132, 152, 191, 1)',
                    borderColor: 'black',
                    borderWidth: 1,
                    xAxisID: 'pricesX'
                },
                {
                    type: 'line',
                    label: 'Undervalued',
                    data: [underValuedMax, underValuedMax],
                    backgroundColor: 'rgba(126, 158, 123, 1)', //green
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    xAxisID: 'underValueX'
                },
                {
                    type: 'line',
                    label: 'About Right',
                    data: [fairValuedMax, fairValuedMax],
                    backgroundColor: 'rgba(249, 201, 117, 1)', //yellow
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    xAxisID: 'fairValueX'
                },
                {
                    type: 'line',
                    label: 'Overvalued',
                    data: [max, max],
                    backgroundColor: 'rgba(216, 69, 74, 1)', //red
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    xAxisID: 'overValuedX'
                }
            ]
        };
        let options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 15,
                    filter: (item) => item.text !== 'Prices'
                }
            },
            title: {
                display: false
            },
            tooltips: {
                callbacks: {
                    title: (tooltipItem, chart) => {
                        const item = tooltipItem[0];
                        return '';
                    },
                    label: (tooltipItem, chart) => `${tooltipItem.xLabel}: $ ${tooltipItem.yLabel}`,
                }
            },
            scales: {
                xAxes: [
                    {
                        id: 'pricesX',
                        // display: true,
                        // fontSize: 50,
                        // fontStyle:'bold',
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontSize: 15
                        },
                        gridLines: {
                            display:false
                        },
                        categoryPercentage: 1,
                        barPercentage: .6
                    },
                    {
                        id: 'underValueX',
                        ticks: {
                            beginAtZero: true,
                            display: false
                        },
                        gridLines: {
                            drawBorder: false,
                            display:false
                        }
                    },
                    {
                        id: 'fairValueX',
                        ticks: {
                            beginAtZero: true,
                            display: false
                        },
                        gridLines: {
                            drawBorder: false,
                            display:false
                        }
                    },
                    {
                        id: 'overValuedX',
                        ticks: {
                            beginAtZero: true,
                            display: false
                        },
                        gridLines: {
                            drawBorder: false,
                            display:false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false,
                            min: 0,
                            max: max
                        }
                    }
                ]
            },
            animation: {
                onComplete: function() {
                    const getFontString = (ctx, newSize) => {
                        const fontArgs = ctx.font.split(' ');
                        return `${newSize} ${fontArgs[fontArgs.length - 1]}`;
                    };
                    const chartInstance = this.chart
                    const ctx = this.chart.ctx;
                    const datasets = this.data.datasets;
                    ctx.font = getFontString(ctx, '20px');
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        if (meta.type === 'bar') {
                            console.log('meta',meta);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(`$ ${data}`, bar._model.x, bar._model.y - 5);
                            });
                        }
                    });
                }
            }
        }
        var chart = new Chart(ctx, {
            type: 'bar',
            data,
            options
        });
        this.charts.push(chart);
    }

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        if (list.length > 0) {
            this.destroy();
            this.currentData = Utils.getLastObject(list);
            // this.buildChart();
            this.buildMixedCart();
        }
    }

}

// The current share price of V.F is above its future cash flow value.
// V.F is overvalued based on earnings compared to the US Textiles, Apparel and Luxury Goods industry average.
// V.F is overvalued based on earnings compared to the US market.
// V.F is poor value based on expected growth next year.
// V.F is overvalued based on assets compared to the US Textiles, Apparel and Luxury Goods industry average.
