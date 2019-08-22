import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
    console.log('a');
    $('nav').removeClass('nav-transparent');
    $('nav').addClass('nav-black');
  }
  blurNav(e){
    console.log('b');
    $('nav').addClass('nav-transparent');
    $('nav').removeClass('nav-black');
  }
}
