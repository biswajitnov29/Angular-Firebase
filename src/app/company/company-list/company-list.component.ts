import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company-service.service';
import { AngularFireList } from 'angularfire2/database';
import { Company } from '../../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies$:any;
  companiesList:Company[];
  constructor(companyService:CompanyService) { 
    this.companies$=companyService.getCompanies();
    this.companies$.subscribe(
      (_companies: any[])=> { 
        let companyList=_companies.map((comp)=>{
          let newCompany:any={};
          newCompany.key=comp.payload.key;
          newCompany.name=comp.payload.val().name;
          return newCompany;
        });
        this.companiesList=companyList;  
      },
      error => console.log('Error',error),
      ()=>console.log('Completed')
    );
   }

  ngOnInit() {
  }

}
