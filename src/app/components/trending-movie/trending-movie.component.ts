import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.scss'],
})
export class TrendingMovieComponent implements OnInit {
  constructor(private _moviesService: MoviesService) {}
  movies:[] = []
  type:string = 'movie'
  trendingMovies: TrendingMovies = {} as TrendingMovies;
  ngOnInit(): void {
    this._moviesService.getTrendingMoviesBerWeek().subscribe({
      next: (res) => {
        this.movies = res.results
        this.trendingMovies = res.results
        console.log(this.trendingMovies);
        console.log(this.trendingMovies.poster_path);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
