import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _httpClient: HttpClient,
    private _router: Router
    ) {}
  getDetails(id:any,media_type:string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }
  similarMovie(id:any,media_type:string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=a345db2a6ddf1f70a491f3cb5bca88d5`
    );
  }

}
