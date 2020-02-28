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
import { EmployeeService } from './_services/employee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JqueryComponent } from './jquery/jquery.component';
//import { FrequentUsedjsComponent } from './frequent-usedjs/frequent-usedjs.component';
import { FrequentUsedjsModule } from './frequent-usedjs/frequent-usedjs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunctionComponent } from './function/function.component';
import { CssComponent } from './css/css.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';

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
    FunctionComponent,
    CssComponent,
    HomeComponent,
    LoginComponent    
    //FrequentUsedjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DeferLoadModule,
    HttpClientModule,
    FrequentUsedjsModule,
    BrowserAnimationsModule
  ],
  exports:[FrequentUsedjsModule],
  providers: [
    EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
