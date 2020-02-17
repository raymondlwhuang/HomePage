import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentDetailComponent } from './employment-detail/employment-detail.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ArtComponent } from './art/art.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsDemoComponent } from './skills-demo/skills-demo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { JqueryComponent } from './jquery/jquery.component';
//import { FrequentUsedjsComponent } from './frequent-usedjs/frequent-usedjs.component';
import { FrequentUsedjsModule } from './frequent-usedjs/frequent-usedjs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    ArtComponent,
    PortfolioComponent,
    SkillsDemoComponent,
    JavascriptComponent,
    JqueryComponent,
    //FrequentUsedjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    HttpClientModule,
    FrequentUsedjsModule,
    BrowserAnimationsModule
  ],
  exports:[FrequentUsedjsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
