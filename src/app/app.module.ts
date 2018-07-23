import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company-service.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';


const fireBaseConfig = {
    //FireBase Config
  };

  

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    ContactListComponent,
    ContactEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
      AngularFireModule.initializeApp(fireBaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      MatToolbarModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      AppRoutingModule
      
  ],
  providers: [CompanyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
