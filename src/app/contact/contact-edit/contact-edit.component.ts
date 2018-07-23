import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Contact-service.service';
import { Contact } from '../../Contact';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable,of } from 'rxjs';
import { CompanyService } from '../../company/company-service.service';
import { Company } from '../../company';

@Component({
  selector: 'app-Contact-edit',
  templateUrl: './Contact-edit.component.html',
  styleUrls: ['./Contact-edit.component.css'],
  providers:[ContactService]
})
export class ContactEditComponent implements OnInit {

  contact$:any;
  contactObject:Contact;
  _contactService:ContactService;
  contactKey:string;
  isNewContact:boolean;
  companies$:any;
  companiesList:Company[];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    ContactService:ContactService,
    private _companyService:CompanyService){
    this._contactService=ContactService;
  }
  
  ngOnInit() {
    this.companies$=this._companyService.getCompanies();
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
    this.contactKey=this.activatedRoute.snapshot.params['id'];
    this.isNewContact=this.contactKey==='new';
    !this.isNewContact ? this.getContact() : this.contact$=of({}) as Observable<Contact>;
  }

  getContact(){
    this.contact$=this._contactService.getContact(this.contactKey);
  }
saveContact(Contact){
  this._contactService.saveContact(Contact)
  .then(_=>{
    this.router.navigate([`contact-list`]);
  });
}

updateContact(Contact){
  Contact.key=this.contactKey;
  this._contactService.updateContact(Contact)
  .then(_=>{
    this.router.navigate([`contact-list`]);
  })
}

removeContact(){
  this._contactService.removeContact(this.contactKey)
  .then(_=>{
    this.router.navigate([`contact-list`]);
  });
}

}
