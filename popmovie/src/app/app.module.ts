import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar/navbar2/navbar2.component';
import { LoginpageComponent } from './pages/account/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/account/signuppage/signuppage.component';
import { DetailsmoviepageComponent } from './pages/movies/detailsmoviepage/detailsmoviepage.component';
import { FavoritemoviepageComponent } from './pages/movies/favoritemoviepage/favoritemoviepage.component';
import { MovieselectorpageComponent } from './pages/movies/movieselectorpage/movieselectorpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    FooterComponent,
    SignuppageComponent,
    Navbar2Component,
    MovieselectorpageComponent,
    DetailsmoviepageComponent,
    FavoritemoviepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
