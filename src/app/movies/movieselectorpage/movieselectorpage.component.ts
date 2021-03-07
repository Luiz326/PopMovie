import { Component, OnDestroy, OnInit } from '@angular/core';
import {MoviedbService} from '../../service/moviedb.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movieselectorpage',
  templateUrl: './movieselectorpage.component.html',
  styleUrls: ['./movieselectorpage.component.css']
})
export class MovieselectorpageComponent implements OnInit , OnDestroy{

  newMovies = []
  subNewMovies: Subscription = new Subscription;

  topMovies = []
  subTopMovies!: Subscription;

  constructor(private movieService: MoviedbService) {

  }

  ngOnInit(): void {
    // this.movieService.getMovie(458156).subscribe(response => {
    //   console.log(response)
    //})
    this.subNewMovies = this.movieService.getNewMovies().subscribe(response => {
      this.newMovies = response.results.slice()
    })
    this.subTopMovies = this.movieService.getTopMovies().subscribe(response => {
      this.topMovies = response.results.slice()
      console.log(this.topMovies[0])
    })
  }

  ngOnDestroy() {
    this.subNewMovies.unsubscribe()
    this.subTopMovies.unsubscribe()
  }
}

