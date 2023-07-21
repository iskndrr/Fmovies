import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  pages: number[] = [];
  movies: [] = [];
  movie: TrendingMovies = {} as TrendingMovies;
  constructor(private _moviesService: MoviesService) {
    this.pages = new Array(10).fill('').map((x, index) => index + 1);
  }
  ngOnInit(): void {
    this.getMovies(1);
  }

  getMovies(pageNumber:number) {
    this._moviesService.popularMovies(pageNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.movie = res.results.filter(
          (x: any) => x.poster_path !== null
        );
        this.movies = res.results.filter(
          (x: any) => x.poster_path !== null
        );
      },
    });
  }
}
