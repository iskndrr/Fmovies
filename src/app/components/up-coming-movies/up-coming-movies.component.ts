import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-up-coming-movies',
  templateUrl: './up-coming-movies.component.html',
  styleUrls: ['./up-coming-movies.component.scss']
})
export class UpComingMoviesComponent implements OnInit {
  movies:[] = []
  constructor(private _moviesService:MoviesService){}
ngOnInit(): void {
this._moviesService.upComingMovies().subscribe({
  next:(res)=>{
    this.movies = res.results
    console.log(this.movies);
  },
  error:(err)=>{console.log(err);
  }
})

}
}
