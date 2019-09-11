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

  updateUserByUid(uid:string, data: any, role?) {
    try {
      return this.db.collection(`/user`).doc(uid).set({
        first_name: data.firstName,
        last_name: data.lastName,
        display_name: data.displayName ? data.displayName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        birthday: data.birthday ? data.birthday : '' ,
        role: role || 2
      })
    } catch (error) {
      console.log(error);
    }
  }
}
