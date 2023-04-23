import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  {path:'profile' ,component:ProfileComponent},
  {path:'privacy' ,component:PrivacyComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
