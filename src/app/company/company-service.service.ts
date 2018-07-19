import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Company } from '../company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company$:AngularFireObject<Company>;
  companies$:AngularFireList<Company[]>;

  constructor(private db:AngularFireDatabase) {
    this.company$=this.db.object('company');
    this.companies$=this.db.list('companies');
  }

  getCompanies(){
    return this.companies$.snapshotChanges();
  }

  saveCompany(company){
    return this.companies$.push(company);
  }

  updateCompany(company){
    return this.companies$.update(company.key,company);
    // this.db.object(`companies/${company.key}`).update(company);
  }

  removeCompany(companyKey){
    return this.companies$.remove(companyKey);
  }

  getCompany(companyKey:string){
    return this.db.object(`companies/${companyKey}`).valueChanges();
  }

}
