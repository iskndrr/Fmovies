import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/shared/interface/details';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { DetailsService } from 'src/app/shared/services/details.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: any = '';
  media_type:string=''
  type: any = '';
  constructor(
    private _detailsService: DetailsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  movies: [] = [];
  similarMovies: any;
  movieDetails: [] = [];
  details: Details = {} as Details;

  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        this.movieId = res.params.id;
        this.media_type = res.params.mediaType;
        console.log(res);
        this.detlInDetails(this.movieId);
      },
    });
    // let {id,media_type}= this._activatedRoute.snapshot.params
    // this.detlInDetails(id,media_type);


  }
  detlInDetails(id:any) {
    this.goDetails(id,this.media_type);
    this._detailsService.similarMovie(id,this.media_type).subscribe({
      next: (res) => {
        this.similarMovies = res.results.filter(
          (x: any) => x.poster_path !== null
        );
        this.movies = this.similarMovies;
        console.log(this.similarMovies);
        console.log(this.movies);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._detailsService.getDetails(id,this.media_type).subscribe({
      next: (res) => {
        console.log(res);
        this.movieDetails = res;
        this.details = res;
        console.log(this.details);
      },
    });
  }

  goDetails(id: any,media_type:string) {
    this._router.navigate([`/details/${id}/${media_type}`]);
  }
}
