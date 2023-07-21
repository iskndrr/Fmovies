import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-top-imdb',
  templateUrl: './top-imdb.component.html',
  styleUrls: ['./top-imdb.component.scss'],
})
export class TopImdbComponent implements OnInit {
  pages: number[] = [];
  movies: [] = [];
  type:string = 'movie'
  typeTv:string = 'tv'
  movie: TrendingMovies = {} as TrendingMovies;
  constructor(private _moviesService: MoviesService) {
    this.pages = new Array(10).fill('').map((x, index) => index + 1);
  }
  ngOnInit(): void {
    this.getAll(1)
  }

  getAll(page: number) {
    this._moviesService.all(page).subscribe({
      next: (res) => {
        console.log(res);
        this.movie = res.results.filter((x: any) => x.poster_path !== null);
        this.movies = res.results.filter((x: any) => x.poster_path !== null);

      },
    });
  }
}
