import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private myIndex = 0;

  constructor() { }

  ngOnInit() {
    //this.carousel();
  }
  
  
  // private carousel() {
  //   let x = $( ".mySlides" );
  //   for (let i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   this.myIndex++;
  //   if (this.myIndex > x.length) {this.myIndex = 1}    
  //   x[this.myIndex-1].style.display = "block";  
  //   setTimeout(this.carousel, 5000); // Change image every 2 seconds
  // };
}
