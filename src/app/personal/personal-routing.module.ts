import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    { path: 'personal', component: PersonalComponent },
    { path: 'personal/profile', component: UserProfileComponent }
  
  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
