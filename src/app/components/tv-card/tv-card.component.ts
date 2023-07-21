import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/shared/interface/details';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';
import { TvShow } from 'src/app/shared/interface/tv-show';
import { DetailsService } from 'src/app/shared/services/details.service';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.scss']
})
export class TvCardComponent {

  constructor(
    private _router: Router
  ) {}

  @Input() tv: TvShow = {} as TvShow;
  @Input() det: any ;

  goDetails(id: any,media_type:string) {
    this._router.navigate([`/details/${id}/${media_type}`]);
  }

}
9
