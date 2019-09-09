import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
    $(function(){
      $('[data-toggle="tooltip"]').tooltip();
      $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
      });
      $('.side-nav .collapse').on("show.bs.collapse", function() {                        
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
      });
    }) 
  }

  ngOnInit() {
  }

}
