import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js';
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

    getAllocationData(data) {

        const NetCashFlowFromInvesting = Math.abs(data.NCFI) || 0;
        const capex = Math.abs(data.CAPEX) || 0;
        const rnd = Math.abs(data.RND) || 0;
        const acquisitions = Math.abs(capex - NetCashFlowFromInvesting);
        const totalAllocation = capex + rnd + acquisitions;

        const fix = (value) => (value < 0) ? 0 :
                        (value < 1) ? (value * 100).toFixed(2) : 100; // TO DO: remove after cleaner data
        const capexPercentage = fix(Utils.divide(capex, totalAllocation));
        const rndPercentage = fix(Utils.divide(rnd, totalAllocation));
        const acquisitionsPercentage = fix(Utils.divide(acquisitions, totalAllocation));
        return {
            capex: capexPercentage,
            rnd: rndPercentage,
            acquisitions: acquisitionsPercentage
        }
    }

    buildGrowthAllocationChart() {
        const allocation = this.getAllocationData(this.currentData);
        console.log('allocation',allocation);
        var ctx = document.getElementById('growthAllocationChart');
        const labels = ['Research', 'Capital Expenditure', 'Acquisitions'];
        let data = {
            labels: ['Current'],
            datasets: [
                    {
                        label: 'Research',
                        data: [allocation.rnd],
                        fillOpacity: .3,
                        borderWidth: 1,
                        borderColor: 'white',
                        backgroundColor: "rgba(249, 201, 117, 1)"
                    },
                    {
                        label: 'Capital Expenditure',
                        data: [allocation.capex],
                        fillOpacity: .3,
                        borderWidth: 1,
                        borderColor: 'white',
                        backgroundColor: "rgba(126, 158, 123, 1)"
                    },
                    {
                        label: 'Acquisitions',
                        data: [allocation.acquisitions],
                        fillOpacity: .3,
                        borderWidth: 1,
                        borderColor: 'white',
                        backgroundColor: "rgba(216, 69, 74, 1)"
                    }

            ],
        };
        var options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
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
                            display: false,
                            min: 0,
                            max: 100
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

    buildGrowthAllocationTimeline() {
        var ctx = document.getElementById("growthAllocationTimeline");
        const list = this.fundamentals.list;
        let allocationOverTime = [];
        list.forEach((ele) => {
            const allocation = this.getAllocationData(ele);
            allocationOverTime.push(allocation);
        });
        const years = Utils.reduce(list, 'date', (val) => val.split('-')[0]);
        const capex = Utils.reduce(allocationOverTime, 'capex', (val) => val);
        const rnd = Utils.reduce(allocationOverTime, 'rnd',(val) => val);
        const acquisitions = Utils.reduce(allocationOverTime, 'acquisitions', (val) => val);
        console.log('growthAllocationTimeline',{
            years,
            capex,
            rnd,
            acquisitions
        });
        var data = {
            labels: years,
            datasets: [
                {
                    label: 'Research',
                    data: rnd,
                    backgroundColor: 'rgba(249, 201, 117, 1)'
                },
                {
                    label: 'Capital Expenditure',
                    data: capex,
                    backgroundColor: 'rgba(126, 158, 123, 1)'
                },
                {
                    label: 'Acquisitions',
                    data: acquisitions,
                    backgroundColor: 'rgba(216, 69, 74, 1)'
                }

            ]
        };
        var options = {
            responsive: true,
            maintainAspectRatio: true,
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
                        stacked: true,
                        gridLines: {
                            drawBorder: false,
                            display:false
                        },
                        ticks: {
                            display: false,
                            min: 0,
                            max: 100
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

    ngOnChanges() {
        const list = this.fundamentals.list || [];
        if (list.length > 0) {
            this.currentData = Utils.getLastObject(list);
            this.buildGrowthAllocationChart();
            this.buildGrowthAllocationTimeline();
        }
    }


}


// Steve's compensation has increased by more than 20% in the past year.
// Steve's compensation appears reasonable.
// The tenure for the V.F management team is about average.
// The tenure for the V.F board of directors is about average.
