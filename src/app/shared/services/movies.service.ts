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
  getTrendingTvBerWeek(): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }
  upComingMovies(): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }
  moviesVideo(id:any): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }
  popularMovies(pageNumber:number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a345db2a6ddf1f70a491f3cb5bca88d5&page=${pageNumber}`
    );
  }
  all(pageNumber:number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=a345db2a6ddf1f70a491f3cb5bca88d5&page=${pageNumber}`
    );
  }

}
