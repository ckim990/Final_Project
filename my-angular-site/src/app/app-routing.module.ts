import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent
  },
  {
    path: 'my-work',
    component: MyWorkComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
