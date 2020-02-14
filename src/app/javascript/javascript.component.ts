import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  result : {};
  constructor(private jsonService : JsonService) { }

  ngOnInit() {
        $(document).ready(function(){
          $.getJSON( "../../assets/json/generated.json", function( data ) {
            console.log(data);
            $( "#code-container" ).html( data );
            alert( "Load was performed." );
          });
        });        
    
  }

}
