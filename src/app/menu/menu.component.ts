import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isShown: boolean = false;
  displayButton: string = 'Show chat';
  menuFromServer = [
    {id: 1, name:'Italian Pizza', price: 2.90},
    {id: 2, name:'Greek Pizza', price: 2.90},
    {id: 3, name:'American Pizza', price: 2.90},
    {id: 4, name:'Flash Pizza', price: 2.90},
    {id: 5, name:'Tomatoe Pizza', price: 2.90},
    {id: 6, name:'Margherita', price: 2.90}
  ];

  imgPlaceRight = true;
  menu = [];

  constructor() {  }

  ngOnInit() {
    this.menu = this.processMenu();
  }
  
  ngAfterViewInit() {
    this.contentWayPoint();
  }

  processMenu(){
    let menu = [];
    this.menuFromServer.forEach( (element,index) => {
      if(index<3){
        element["isRight"] = true;
      }
      else if(index<6){
        element["isRight"] = false;
      }
      menu.push(element);
    });
    return menu;
  }

  changePopup(){
    if (this.isShown){
      this.isShown = false;
      this.displayButton = 'Show chat';
    }
    else {
      this.isShown = true;
      this.displayButton = 'Hide chat';
    }
  }
  
  // Animation
  contentWayPoint(){
    let i = 0;
    $('.ftco-animate').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function(){
  
          $('body .ftco-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });
          
        }, 100);
      }
    } , { offset: '95%' } );
  }
}

