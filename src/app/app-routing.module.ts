import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './employment/employment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
