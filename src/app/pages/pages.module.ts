import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from '../pipe/pipe.module';
import { PersonHeroModule } from '../organism/person-hero/person-hero.module';
import { PersonSummaryModule } from '../organism/person-summary/person-summary.module';

import { PersonService } from '../api/person.service';
import { PostService } from '../api/post.service';
import { UserService } from '../api/user.service';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArchiveComponent,
    MechanicsComponent,
    TextComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PipeModule,
    PersonHeroModule,
    PersonSummaryModule,
    RouterModule.forChild([
        {
          path: '',
          component: HomeComponent,
          resolve : {
            persons : PersonService
          }
        },
        {
          path: 'past-trials',
          component: ArchiveComponent,
          resolve : {
            persons : PersonService
          }
        },
        {
          path: 'how-it-works',
          component: MechanicsComponent
        },
        {
          path: 'terms',
          component: TextComponent,
          resolve : {
            post : PostService
          },
          data : {
            slug : 'terms'
          }
        },
        {
          path: 'signup',
          component: SignupComponent,
          canActivate : [ UserService ]
        }
      ] as Routes)
  ],
  providers: [ PersonService, PostService ],
  exports: [ RouterModule ]
})
export class PagesModule {}
