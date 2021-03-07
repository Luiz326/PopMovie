import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginpageComponent } from './account/loginpage/loginpage.component';
import { SignuppageComponent } from './account/signuppage/signuppage.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FramePageComponent } from './master/frame.page';
import { Frame2PageComponent } from './master/frame2.page';
import { Frame3PageComponent } from './master/frame3.page';
import { DetailsmoviepageComponent } from './movies/detailsmoviepage/detailsmoviepage.component';
import { FavoritemoviepageComponent } from './movies/favoritemoviepage/favoritemoviepage.component';
import { MovieselectorpageComponent } from './movies/movieselectorpage/movieselectorpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar/navbar2/navbar2.component';
import { Navbar3Component } from './navbar/navbar3/navbar3.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    Navbar2Component,
    LoginpageComponent,
    SignuppageComponent,
    DetailsmoviepageComponent,
    FavoritemoviepageComponent,

    FramePageComponent,
    Frame2PageComponent,
    Frame3PageComponent,
    Navbar3Component,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
