import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/company-list', pathMatch: 'full' },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-edit/:id', component: CompanyEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
