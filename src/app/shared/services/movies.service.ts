import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _httpClient: HttpClient) {}

  getTrendingMoviesBerWeek(): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }
}
