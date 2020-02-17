import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo-output',
  templateUrl: './demo-output.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./demo-output.component.css']
})
export class DemoOutputComponent implements OnInit {
  @Input() employee : Employee;
  constructor() { }

  ngOnInit() {
  }

}
