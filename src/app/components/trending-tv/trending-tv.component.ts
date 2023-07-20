import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvShowService } from 'src/app/shared/services/tv-show.service';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.scss'],
})
export class TrendingTvComponent implements OnInit {
  constructor(private _moviesService: TvShowService) {}
  TvShow: [] = [];
  trendingTv: any;
  ngOnInit(): void {
    this._moviesService.getTrendingTvBerWeek().subscribe({
      next: (res) => {
        this.trendingTv = res.results.filter(
          (x: any) => x.poster_path !== null
        );
        this.TvShow = this.trendingTv;

        console.log(this.trendingTv);
        console.log(this.trendingTv.poster_path);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
