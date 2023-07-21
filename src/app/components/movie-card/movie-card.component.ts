import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/shared/interface/details';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { DetailsService } from 'src/app/shared/services/details.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  constructor(
    private _detailsService: DetailsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  movieId: any = '';
  movies: [] = [];
  similarMovies: TrendingMovies = {} as TrendingMovies;
  movieDetails: [] = [];
  details: Details = {} as Details;

  @Input() movie: TrendingMovies = {} as TrendingMovies;
  @Input() det: any;

  goDetails(id: any, media_type: string) {
    console.log(id);
    console.log(media_type);
    if (media_type != undefined) {
      this._router.navigate([`/details/${id}/${media_type}`]);
    }else{
      this._router.navigate(['/home'])
    }
  }

  // getDetails() {
  //   this._detailsService.similarMovie(this.movieId).subscribe({
  //     next: (res) => {
  //       this.movies = res.results.filter((x: any) => x.poster_path !== null);

  //       this.similarMovies = res.results;
  //       console.log(this.similarMovies);
  //       console.log(this.movies);
  //       this.goDetails(this.movieId)
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  //   this._detailsService.getDetails(this.movieId).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.movieDetails = res;
  //       this.details = res;
  //       console.log(this.details);
  //     },
  //   });
  // }
}
