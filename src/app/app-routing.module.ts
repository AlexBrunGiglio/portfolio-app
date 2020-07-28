import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path : 'about', component: AboutComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path : 'blog', component: BlogComponent, pathMatch: 'full'},
  { path : 'contact', component: ContactComponent },
  { path : 'experience', component: ExperienceComponent },
  { path : 'project', component: ProjectComponent},
  { path : 'skills', component: SkillsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
