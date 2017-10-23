import { Component,
            OnInit,
            Input,
            Output,
            EventEmitter
        } from '@angular/core';
import { FundamentalsSerivce } from './fundamentals.service';
import { CompanyProfilesSerivce } from './companyProfiles.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
  providers: [FundamentalsSerivce, CompanyProfilesSerivce]
})
export class PageContentComponent implements OnInit {
    @Output() toggleEvent = new EventEmitter<string>();
    @Input() pageData:string;
    currentData: any;
    fundamentals: any;
    profile: any;

    constructor(
        private fundamentalsSerivce: FundamentalsSerivce,
        private companyProfilesSerivce: CompanyProfilesSerivce) {
        this.currentData = {};
        this.fundamentals = {};
        this.profile = {};
    }

    ngOnInit() {
    }

    private setupFundamentals = (fundamentals) => {
        fundamentals.sort();
        console.log('setupFundamentals', fundamentals);
        const list = fundamentals.list;
        this.fundamentals = fundamentals;
        this.currentData = (list.length > 0) ? list[list.length - 1] : {};
        console.log('currentData', this.currentData);
    }

    private setupProfile = (profiles) => {
        // profiles.sort();
        console.log('setupProfile', profiles);
        this.profile = profiles;
    }

    getFundamentals(ticker) {
        return this.fundamentalsSerivce.getFundamentals(ticker)
                .subscribe(this.setupFundamentals);
    }

    getProfiles(ticker) {
        return this.companyProfilesSerivce.getCompanyProfiles(ticker)
                .subscribe(this.setupProfile);
    }

    ngOnChanges() {
        console.log(`PageContentComponent-pageData: ${this.pageData}`);
        if (this.pageData) {
            this.getFundamentals(this.pageData);
            this.getProfiles(this.pageData);
        }
    }

    toggleSidebar() {
        this.toggleEvent.emit('')
    }

}
