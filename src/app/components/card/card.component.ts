import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/shared/interface/details';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { DetailsService } from 'src/app/shared/services/details.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
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
  // @Input() tv: TvShow = {} as TvShow;
  @Input() movie: TrendingMovies = {} as TrendingMovies;
  @Input() type: any;
  @Input() typeTv: any;
  @Input() det: any;

  goDetails(id: any, media_type: string) {
    console.log(id);
    console.log(this.type);
    if (media_type !== undefined) {
      this._router.navigate([`/details/${id}/${media_type}`]);
    } else if(this.type != undefined){
      this._router.navigate([`/details/${id}/${this.type}`]);
    } else{
      this._router.navigate(['/home']);
    }
  }
}
