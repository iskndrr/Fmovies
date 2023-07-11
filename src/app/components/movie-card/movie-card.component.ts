import { Component, Input } from '@angular/core';
import { TrendingMovies } from 'src/app/shared/interface/trending-movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: TrendingMovies = {} as TrendingMovies;

}
