import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path : 'about', component: AboutComponent},
  { path : 'blog', component: BlogComponent},
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
