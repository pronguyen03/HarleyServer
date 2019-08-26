import { Component, OnInit } from '@angular/core';

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
    import('../../assets/js/menu/main.js');

  }

  processMenu(){
    let menu = [];
    let i = 0;
    this.menuFromServer.forEach(element => {
      if(i<3){
        element["isRight"] = true;
      }
      else if(i<6){
        element["isRight"] = false;
      }
      menu.push(element);
      i++;
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
  
}
