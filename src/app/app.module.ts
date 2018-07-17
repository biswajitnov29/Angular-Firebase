import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';


const fireBaseConfig = {
    // Firebase config values
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(fireBaseConfig),
      AngularFireDatabaseModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
