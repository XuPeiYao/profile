import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { EducationComponent } from './pages/education/education.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AwardsComponent } from './pages/awards/awards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'awards',
    component: AwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
