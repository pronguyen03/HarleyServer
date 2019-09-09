import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUserDataByUid(uid: string){
    return this.db.collection(`/user`).doc(uid).get();
  }
}
