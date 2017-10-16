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
    data:any;

    constructor(private service: FundamentalsSerivce) {
        this.data = {};
    }

    ngOnInit() {
    }

    getFundamentals(ticker) {
        return this.service.getFundamentals(ticker)
                .subscribe((fundamentals) => {
                    console.log('getFundamentals-fundamentals', fundamentals);
                    this.data = fundamentals;
                });
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
