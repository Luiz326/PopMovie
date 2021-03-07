import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class MoviedbService {
  url: string;
  appKey: string;
  imagePath: string;

  constructor(private http: HttpClient) {
    this.appKey = '64b9fb8fb62df4e7915136a08d6dc2a4'
    this.url = 'https://api.themoviedb.org/3/movie/'
    this.imagePath = 'http://image.tmdb.org/t/p/original'
  }

   // ------------ | GET IMAGE PATH | -------------
   getImagePath(): string {
    return this.imagePath
}

// ------------ | GET MOVIE | ------------
getMovie(id: number): Observable<any> {
    return this.http.get(`${this.url}${id}?api_key=${this.appKey}`)
}

// ------------ | NEW MOVIE | LANÇAMENTOS | --------------
getNewMovies(): Observable<any>{
    return this.http.get(`${this.url}popular?api_key=${this.appKey}&language=en-US&page=1`)
}

// ------------ | TOP MOVIE | EM ALTA | --------------
getTopMovies(): Observable<any>{
    return this.http.get(`${this.url}top_rated?api_key=${this.appKey}&language=en-US&page=1`)
}

// ------------ | GET CAST | --------------
getCast(id: number): Observable<any>{
    return this.http.get(`${this.url}${id}/credits?api_key=${this.appKey}`)
}

// ------------ | GET A LIST OF ALL GENRES TO SHOW | --------------
getGenresMovies(): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.appKey}`)
}

// ------------ | GET MOVIE USING GENRES | --------------
getMoviesByGenre(genreID: number): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.appKey}&with_genres=${genreID}`)
}

}
