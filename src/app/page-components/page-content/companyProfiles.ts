
export class CompanyProfiles {
    ticker: string;
    name: string;
    location: string;
    sector: string;
    industry: string;

    constructor(data) {
        this.ticker = data.ticker;
        this.name = data.name;
        this.location = data.location;
        this.sector = data.sector;
        this.industry = data.industry;
    }
}

const MockCompanyProfiles = () => {
    const companyProfiles : CompanyProfiles = {
        ticker: 'VFC',
        name: 'V F CORP',
        location: 'NORTH CAROLINA, U.S.A',
        sector: 'Consumer Goods',
        industry: 'Textile - Apparel Clothing'
    };
    return companyProfiles;
}

export { MockCompanyProfiles };
