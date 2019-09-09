import { Component, OnInit } from '@angular/core';
import { User } from '../shared/classes/user';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private user: User, private loginService: LoginService, private router: Router) {
    let userStorage = JSON.parse(localStorage.getItem('user'));
    if (userStorage){
      this.user.setUser(userStorage);
      console.log(this.user);
    }
  }

  ngOnInit() {
  }
  changeBackground(){
    $(".collapse").on('show.bs.collapse', function(){
      $('nav').removeClass('nav-transparent');
      $('nav').addClass('nav-expand');
      $('.navbar-collapse').addClass('nav-expand');
    });
    $(".collapse").on('hidden.bs.collapse', function(){
      $('nav').addClass('nav-transparent');
      $('nav').removeClass('nav-expand');
      $('.navbar-collapse').removeClass('nav-expand');
    });
  }
  focusNav(e){
    // $('nav').removeClass('nav-transparent');
    // $('nav').addClass('nav-black');
  }
  blurNav(e){
    $('nav').addClass('nav-transparent');
    $('nav').removeClass('nav-black');
  }
  scrollToElement(id: string){
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }
  logout(){
    this.loginService.logout();
    this.user.setEmpty();
  }

  navTo(link: string){
    this.router.navigate([link]);
  }
}
