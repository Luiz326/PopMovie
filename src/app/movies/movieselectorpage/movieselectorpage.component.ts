import { Component, OnDestroy, OnInit } from '@angular/core';
import {MoviedbService} from '../../service/moviedb.services';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movieselectorpage',
  templateUrl: './movieselectorpage.component.html',
  styleUrls: ['./movieselectorpage.component.css']
})
export class MovieselectorpageComponent implements OnInit  {

  public imagePath$!: String;
  constructor(private data:MoviedbService) { }

  ngOnInit(): void {
    this.imagePath$ = this.data.getImagePath();

  }
}

