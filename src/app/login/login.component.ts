import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }
  public loginForm: FormGroup;
  constructor(public loginService: LoginService) {
    this.initForm();
  }

  ngOnInit() {}

  setValueFromFormName(name: string, value: any){
    return this.loginForm.controls[name].setValue(value);
  }

  getValueFromFormName(name){
    return this.loginForm.controls[name].value;
  }

  login() {
    let email = this.getValueFromFormName('email');
    let password = this.getValueFromFormName('password');
    if (email === 'yaphets1603@gmail.com' && password === 'anhnguyen'){
      $('#login-modal').modal('hide');
      alert('Success');
    }
  }
}
