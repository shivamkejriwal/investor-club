import { Component,
            OnInit,
            Input,
            Output,
            EventEmitter
        } from '@angular/core';
import { FundamentalsSerivce } from './fundamentals.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
  providers: [FundamentalsSerivce]
})
export class PageContentComponent implements OnInit {
    @Output() toggleEvent = new EventEmitter<string>();
    @Input() pageData:string;
    currentData: any;
    fundamentals: any;

    constructor(private service: FundamentalsSerivce) {
        this.currentData = {};
        this.fundamentals = {};
    }

    ngOnInit() {
    }

    private setupPage = (fundamentals) => {
        fundamentals.sort();
        console.log('setupPage', fundamentals);
        const list = fundamentals.list;
        this.fundamentals = fundamentals;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
        console.log('currentData', this.currentData);
    }

    getFundamentals(ticker) {
        return this.service.getFundamentals(ticker)
                .subscribe(this.setupPage);
    }

    ngOnChanges() {
        console.log(`PageContentComponent-pageData: ${this.pageData}`);
        if (this.pageData) {
            this.getFundamentals(this.pageData);
        }
    }

    toggleSidebar() {
        this.toggleEvent.emit('')
    }

}
