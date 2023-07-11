import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  trending:TrendingMovies[]=[]
  trendingMovies: TrendingMovies = {} as TrendingMovies;

constructor(private _moviesService:MoviesService){}
ngOnInit(): void {
this._moviesService.getTrendingMoviesBerWeek().subscribe({
  next:(res)=>{console.log(res);
    this.trending = res.results
    this.trendingMovies = res.results
    console.log(this.trending);

  },
  error:(err)=>{console.log(err);
  }
})
}
}
