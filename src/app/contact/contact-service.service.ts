import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  Contact$: AngularFireObject<Contact>;
  contacts$: AngularFireList<Contact[]>;

  constructor(private db: AngularFireDatabase) {
    this.Contact$ = this.db.object('Contact');
    this.contacts$ = this.db.list('contacts');
  }

  getContacts(companyKey?) {
    if (companyKey) {
      return this.db.list('contacts', (ref) => {
        let q = ref.orderByChild('companykey').equalTo(companyKey);
        return q;
      }).snapshotChanges();
    } else {
      return this.contacts$.snapshotChanges();
    }
  }

  saveContact(Contact) {
    return this.contacts$.push(Contact);
  }

  updateContact(Contact) {
    return this.contacts$.update(Contact.key, Contact);
    // this.db.object(`contacts/${Contact.key}`).update(Contact);
  }

  removeContact(ContactKey) {
    return this.contacts$.remove(ContactKey);
  }

  getContact(ContactKey: string) {
    return this.db.object(`contacts/${ContactKey}`).valueChanges();
  }

}
