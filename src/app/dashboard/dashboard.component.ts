import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isShown: boolean = false;
  displayButton: string = 'Show chat';
  constructor() { 
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
        if (window.location.pathname == "/dashboard/menu"){
        this.scrollToElement('menu');
        // setTimeout(() => {
      //   this.scrollToElement('menu');
      // }, 1000);
    }
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

  scrollToElement(id: string){
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }
}
