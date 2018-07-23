import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-edit/:id', component: CompanyEditComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-edit/:id', component: ContactEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
