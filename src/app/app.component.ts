import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  connectData:AngularFireList<any>;
    
    constructor(private afd:AngularFireDatabase){

      this.afd.object('Connect').valueChanges().subscribe((data)=>{
        console.log(data);
      })
      
    }
}
