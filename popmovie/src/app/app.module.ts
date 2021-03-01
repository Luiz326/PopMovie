import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponent } from './footer/footer.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { Navbar2Component } from './navbar/navbar2/navbar2.component';
import { MovieselectorpageComponent } from './movieselectorpage/movieselectorpage.component';
import { DetailsmoviepageComponent } from './detailsmoviepage/detailsmoviepage.component';
import { FavoritemoviepageComponent } from './favoritemoviepage/favoritemoviepage.component';

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
