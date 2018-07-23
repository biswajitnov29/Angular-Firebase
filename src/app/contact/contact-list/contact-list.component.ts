import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Contact-service.service';
import { AngularFireList } from 'angularfire2/database';
import { Contact } from '../../Contact';
import { CompanyService } from '../../company/company-service.service';
import { Company } from '../../company';

@Component({
  selector: 'app-contact-list',
  templateUrl: './Contact-list.component.html',
  styleUrls: ['./Contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts$:any;
  contactsList:Contact[];
  companies$:any;
  companiesList:Company[];


  constructor(private contactService:ContactService,private companyserivce:CompanyService) { 
    this.contacts$=contactService.getContacts();
    this.contacts$.subscribe(
      (_contacts: any[])=> { 
        let ContactList=_contacts.map((comp)=>{
          let newContact:any={};
          newContact.key=comp.payload.key;
          newContact.name=comp.payload.val().name;
          return newContact;
        });
        this.contactsList=ContactList;  
      },
      error => console.log('Error',error),
      ()=>console.log('Completed')
    );

    this.companies$=this.companyserivce.getCompanies();
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

  getSpecificContact(companyKey){
    debugger;
    this.contacts$=this.contactService.getContacts(companyKey);
    this.contacts$.subscribe(
      (_contacts: any[])=> { 
        let ContactList=_contacts.map((comp)=>{
          let newContact:any={};
          newContact.key=comp.payload.key;
          newContact.name=comp.payload.val().name;
          return newContact;
        });
        this.contactsList=ContactList;  
      },
      error => console.log('Error',error),
      ()=>console.log('Completed')
    );
  }

}
