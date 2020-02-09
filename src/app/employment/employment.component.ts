import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let slideIndex = 0;
    
    (function showSlides() {
      let slides = $(".mySlides");
      slides.css('display','none');
      slideIndex = slideIndex >= slides.length ? 1 : slideIndex + 1;
      $(slides[slideIndex-1]).fadeIn('slow');
      setTimeout(showSlides, 10000);
    })()
 
  }

}
