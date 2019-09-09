import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/classes/user';
import { FormGroup, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private user: User, 
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    let userStorage = JSON.parse(localStorage.getItem('user'));
    if (userStorage){
      this.user.setUser(userStorage);
    }
   }

  ngOnInit() {
    this.initForm();
    this.bindUserData();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      uid: [''],
      displayName: [''],
      email: [''],
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      birthday: ['']
    })
  }

  bindUserData(){
    this.userService.getUserDataByUid(this.user.uid).subscribe((result: DocumentSnapshot<any>) => {
      let userDetail = result.data();
      this.user.setUserDetail(userDetail);
      this.userForm.patchValue({
        displayName: this.user.display_name,
        email: this.user.email,
        firstName: this.user.first_name,
        lastName: this.user.last_name,
        phoneNumber: this.user.phone,
        birthday: this.user.birthday
      })
    });
  }

  getValueFromFormName(name:string){
    return this.userForm.controls[name].value;
  }

}
