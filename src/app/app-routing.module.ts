import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent},
  {path:'movieDetails/:id' ,canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'tvDetails/:id' ,canActivate:[AuthGuard],component:TvdetailsComponent},

  {path:'people',canActivate:[AuthGuard], component:PeopleComponent},
  {path:'tvshow',canActivate:[AuthGuard], component:TvshowComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },

  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
