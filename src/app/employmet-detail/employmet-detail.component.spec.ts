import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymetDetailComponent } from './employmet-detail.component';

describe('EmploymetDetailComponent', () => {
  let component: EmploymetDetailComponent;
  let fixture: ComponentFixture<EmploymetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
