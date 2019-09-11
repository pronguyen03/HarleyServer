import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { UserService } from '../shared/services/user.service';

declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errorForm = false;
  errorMessage = '';
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  signUp(): void {
    if (this.signUpForm.invalid){
      this.errorForm = true;
      return;
    }

    let password = this.getValueFromFormName('password');
    let confirmPassword = this.getValueFromFormName('confirmPassword');

    if (password !== confirmPassword){
      this.errorForm = true;
      this.errorMessage = 'Password does not match. Please type again.';
      return;
    }
    
    let signUpData = this.getDataUpload();

    this.loginService.signUp(signUpData.email, signUpData.password).then( result => {
      let user = result.user;
      this.userService.updateUserByUid(user.uid, signUpData).then(value => {
        console.log('Created Successfully');
        this.signUpForm.reset();
        $("#signup-modal").modal('hide');
      });
    }, err => console.error(err));
  }

  getDataUpload(): any {
    let data = {
      firstName: this.getValueFromFormName('firstName'),
      lastName: this.getValueFromFormName('lastName'),
      email: this.getValueFromFormName('email'),
      password: this.getValueFromFormName('password')
    }
    return data;
  }

  getValueFromFormName(name: string): any {
    return this.signUpForm.controls[name].value;
  }
}
