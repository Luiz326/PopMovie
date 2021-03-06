import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './account/loginpage/loginpage.component';
import { SignuppageComponent } from './account/signuppage/signuppage.component';
import { FramePageComponent } from './master/frame.page';
import { Frame2PageComponent } from './master/frame2.page';
import { Frame3PageComponent } from './master/frame3.page';
import { DetailsmoviepageComponent } from './movies/detailsmoviepage/detailsmoviepage.component';
import { FavoritemoviepageComponent } from './movies/favoritemoviepage/favoritemoviepage.component';
import { MovieselectorpageComponent } from './movies/movieselectorpage/movieselectorpage.component';

const routes: Routes = [
  {
    path:'home',
    component:FramePageComponent,
    children: [
      {path:'',component:LoginpageComponent},
    ]
  },
  {
    path:'account',
    component:Frame3PageComponent,
    children:[
      {path:'signup',component:SignuppageComponent},

    ]
  },

  {
    path:'movies',
    component:Frame2PageComponent,
    children:[
      {
        path:'selector',
        component:MovieselectorpageComponent
      },
      {
        path:'details',
        component:DetailsmoviepageComponent
      },
      {
        path:'favorite',
        component:FavoritemoviepageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
