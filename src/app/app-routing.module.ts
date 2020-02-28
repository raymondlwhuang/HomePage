import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './employment/employment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { SkillsDemoComponent } from './skills-demo/skills-demo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { FrequentUsedjsComponent } from './frequent-usedjs/frequent-usedjs.component';
import { FunctionComponent } from './function/function.component';
import { CssComponent } from './css/css.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'CSS', component: CssComponent },
  { 
    path: 'skills-demo', 
    component: SkillsDemoComponent,
    children: [
      { path: '', component: JavascriptComponent },
      { path: 'javaScript:DOM', component: JavascriptComponent },
      { path: 'javaScript:FREQUENTLY', component: FrequentUsedjsComponent },
      { path: 'javaScript:FUNCTIONS', component: FunctionComponent },
      { path: 'jQuery', component: JqueryComponent },
      { path: 'CSS', component: CssComponent, canActivate: [AuthGuard] },
    ]
  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
