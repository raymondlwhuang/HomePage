import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../favorite';
import { FavoriteService } from '../_services/favorite.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['../frequent-usedjs/frequent-usedjs.component.css']
})
export class FunctionComponent implements OnInit {
  favorites : Favorite[];
  title = 'functions';
  promiseCount = 0;
  constructor(private _favorite : FavoriteService) { }

  ngOnInit() {
    this._favorite.getFavorites().subscribe(data => this.favorites = data); 
  }
  renderNewResult(option?:any){
    let snip = '';
    let output = '';
    if(option.target.value != '') {
      $('#code-snip,#output').addClass('add-border');
      this.favorites.forEach((result) => {
        if(option.target.value == result.name){
          result.snip.forEach(element => {
            snip += element + '</br>';
          });
          if(result.output){
            result.output.forEach(element => {
              output += element + '</br>';
            });
    
          }
        } 
      });
      if(option.target.value == 'promise') 
        $('#show-log').removeClass('hide-log');
      else 
        $('#show-log').addClass('hide-log');
    }
    else {
      $('#code-snip,#output').removeClass('add-border');
    }


    $('#code-snip').html(snip);
    $('#output').html(output);
    $('p').css('background-color','lightgrey');
  } 
  MyDecision(wontDo=false) {
    let thisPromiseCount = ++this.promiseCount;

    let log = document.getElementById('output');
    //if(thisPromiseCount % 3 == 0) log.innerHTML = '';
    if(wontDo) log.innerHTML = thisPromiseCount +') Don\'t want do my job(<small>Looking my task</small>)<br/>';
    else log.innerHTML = thisPromiseCount +') Started doing my job(<small>Beging my task</small>)<br/>';
      let promise1 = new Promise((resolve, reject) => {
        if(wontDo) return reject([thisPromiseCount,"I am tired"]);
        else {
          log.innerHTML += thisPromiseCount +') Working as promised (<small>promise started</small>)<br/>';
          setTimeout(() =>resolve(thisPromiseCount), Math.random() * 2000 + 1000);
        }
      }
      ).then((val) =>log.innerHTML += val +') My job is done (<small>promise fullfiled and ended</small>)<br/>')
    .catch((reason) =>log.innerHTML += reason[0] +') Promise rejected resason: ' + reason[1]+'<br/>');

      log.innerHTML += thisPromiseCount +') Promise ' + (wontDo ? 'rejected' : ' made') + '(<small>Sync code terminated</small>)<br/>';
    }    
}
