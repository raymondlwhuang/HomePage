import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children : [
        { path: 'employment', component: EmploymentComponent},
        { path: 'education', component: EducationComponent},
        { path: 'detail', component: AnimalDetailComponent}
    ]
  },
  { path: 'animals', component: AnimalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
