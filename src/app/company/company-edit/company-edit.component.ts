import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company-service.service';
import { Company } from '../../company';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
  providers:[CompanyService]
})
export class CompanyEditComponent implements OnInit {

  company$:any;
  companyObject:Company;
  _companyService:CompanyService;
  companyKey:string;
  isNewCompany:boolean;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    companyService:CompanyService){
    this._companyService=companyService;
  }
  
  ngOnInit() {
    this.companyKey=this.activatedRoute.snapshot.params['id'];
    this.isNewCompany=this.companyKey==='new';
    !this.isNewCompany ? this.getCompany() : this.company$=of({}) as Observable<Company>;
  }

  getCompany(){
    this.company$=this._companyService.getCompany(this.companyKey);
  }
saveCompany(company){
  this._companyService.saveCompany(company)
  .then(_=>{
    this.router.navigate([`company-list`]);
  });
}

updateCompany(company){
  company.key=this.companyKey;
  this._companyService.updateCompany(company)
  .then(_=>{
    this.router.navigate([`company-list`]);
  })
}

removeCompany(){
  this._companyService.removeCompany(this.companyKey)
  .then(_=>{
    this.router.navigate([`company-list`]);
  });
}

}
