import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
import { User } from '../shared/classes/user';
declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  showLoading = false;
  loginFail = false;
  messageError: string;
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }
  public loginForm: FormGroup;
  constructor(public loginService: LoginService, private user: User) {
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
    if (this.loginForm.invalid){
      this.loginFail = true;
    }
    let { email, password } = this.loginForm.value;
    this.showLoading = true;
    this.loginService.login(email, password).then(result => {
      this.showLoading = false;
      if (result) {
        this.user.setUser(result.user);
        $('#login-modal').modal('hide');
        this.loginForm.reset();
        // if (result.status == UserStatus.BLOCK) {
        //   this.loginFail = true;
        //   this.messageError = "Account Block";
        // } else {
        //   this.loginFail = false;
        //   this.user.setUser(result)
        //   this.navToHome()
        // }
      }
    }, (err) => {
      this.showLoading = false;
      this.loginFail = true;
      this.messageError = err.message;
      // if (this.messageError == 'account blocked') {
      //   $("#request-password").modal("show");
      // }
    })
  }

  loginFacebook(){
    this.loginService.FacebookAuth().then((result) => {
      console.log(result);
    }, (err) => {
      this.loginFail = true;
      this.messageError = err.message;
    });
  }

  keyPress(event: any){
    this.loginFail = false;
    if (event.keyCode === 13){
      this.login();
    }
  }
}
