import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ResumeService } from './resume.service';
import { TimesPipe } from './times.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserCardComponent,
    MenuComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    AwardsComponent,
    PublicationsComponent,
    TimesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
