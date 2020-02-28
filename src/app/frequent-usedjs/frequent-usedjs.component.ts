import {ChangeDetectorRef, Component, OnInit, ViewChild,OnDestroy, DoCheck, ChangeDetectionStrategy, Input, OnChanges} from "@angular/core";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../employee';
import { Favorite } from '../favorite';
import { FavoriteService } from '../_services/favorite.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-frequent-usedjs',
  templateUrl: './frequent-usedjs.component.html',
  styleUrls: ['./frequent-usedjs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequentUsedjsComponent implements OnInit {
  employees : Employee[];
  favorites : Favorite[];
  @Input() demoOutput : any[] = [];
  displayedColumns: string[] = ['index', 'name', 'isActive', 'age','company','email','eyeColor'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  title = 'angular-material';

  constructor(private _employeeService : EmployeeService,
              private _favorite : FavoriteService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.demoOutput = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
    this._favorite.getFavorites().subscribe(data => this.favorites = data); 
  }
  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  } 
  renderNewResult(option?:any){
    this.demoOutput =[];
    switch(option.target.value) {
      case 'forEach':
        this.employees.forEach(employee=> employee.eyeColor=='green' ? this.demoOutput.push(employee) : null);
   
        break;
      case 'filter':
        this.demoOutput = this.employees.filter(employee => employee.eyeColor=='blue');
         break;
      case 'sort':
        this.demoOutput = this.employees.slice();
        this.demoOutput.sort((employee,employee1) =>employee.age > employee1.age ? 1 : -1);
        break;
      case 'find':
        let findItem = this.employees.find(employee => employee.age < 22);
        this.demoOutput.push(findItem);
        break;
      case 'pop':
        this.demoOutput = this.employees.slice();
        this.demoOutput.pop();
        break;
      case 'reduce':
        // this.demoOutput = _.reduce([175, 50, 25], function(sum, n) {
        //     return sum + n;
        // });
        break;
      case 'shift':
        this.demoOutput = this.employees.slice();
        this.demoOutput.shift();
        break;
      case 'slice':
        this.demoOutput = this.employees.slice();
        this.demoOutput = this.demoOutput.slice(1, 3);
        break;
      default:
        this.demoOutput = this.employees;
    }    
    this.dataSource = new MatTableDataSource(this.demoOutput);
    this.dataSource.paginator = this.paginator;
    let snip = '';
    if(option.target.value != '') {
      $('#code-snip').addClass('add-border');
      this.favorites.forEach((result) => {
        if(option.target.value == result.name){
          result.snip.forEach(element => {
            snip += element + '</br>';
          });
        } 
      });
    }
    else {
      $('#code-snip').removeClass('add-border');
    }
    $('#code-snip').html(snip);
  } 
}
