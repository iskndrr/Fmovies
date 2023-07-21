import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvShowService } from 'src/app/shared/services/tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit {
  pages: number[] = [];
  tvShows: [] = [];
  tv: TrendingMovies = {} as TrendingMovies;
  constructor(private _tvShow: TvShowService) {
    this.pages = new Array(10).fill('').map((x, index) => index + 1);

  }
  ngOnInit(): void {
    this.getTv(1);
  }

  getTv(pageNumber: number) {
    this._tvShow.popularTv(pageNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.tv = res.results.filter(
          (x: any) => x.poster_path !== null
        );
        this.tvShows = res.results.filter(
          (x: any) => x.poster_path !== null
        );
      },
    });
  }
}
