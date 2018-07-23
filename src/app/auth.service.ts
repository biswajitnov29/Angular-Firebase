import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User>;
  constructor(
    private router:Router,
    private afAuth:AngularFireAuth) {
      this.user$=this.afAuth.authState;
   }


   login(){
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then(user => {
       this.router.navigate(['/company-list']);
     })
     .catch(error => console.log(error));
   }

   logout(){
     this.afAuth.auth.signOut();
     this.router.navigate(['/home']);
   }
}
