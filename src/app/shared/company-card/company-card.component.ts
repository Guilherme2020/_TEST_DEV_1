import { Component, OnInit } from '@angular/core';
import { CompanysService } from '../../services/companys.service';
import { Company } from '../../interfaces/Company';
@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  companys: Company;
  constructor(
    public companyService: CompanysService,
  ) {

  }

  ngOnInit() {
  }
  loadCompany(){
    return this.companyService.getCompanys()
      .subscribe((data: Company) => {
        this.companys = data;
        console.log(data)
      })
  }
}
