import { ROLE } from '../enums/role.enum';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class User {
    uid: string;
    display_name: string;
    phone: string;
    email: string;
    birthday: string;
    address: string;
    user_role: ROLE;
    avatar: string
    setUser(user: any) {
        this.display_name = user.displayName;
        this.uid = user.uid;
        this.phone = user.phoneNumber;
        this.avatar = user.photoURL;
    }

    setEmpty(){
        this.display_name = '';
        this.uid = '';
        this.phone = '';
        this.avatar = '';
    }
}