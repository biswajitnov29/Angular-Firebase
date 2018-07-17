import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';


const fireBaseConfig = {
    apiKey: "AIzaSyCty9NkXMM8qv9QcuUjywpRZRApGS17X44",
    authDomain: "buildingappswithangularf-bcd6e.firebaseapp.com",
    databaseURL: "https://buildingappswithangularf-bcd6e.firebaseio.com",
    projectId: "buildingappswithangularf-bcd6e",
    storageBucket: "buildingappswithangularf-bcd6e.appspot.com",
    messagingSenderId: "1006169717487"
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
