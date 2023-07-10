import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Title } from '@angular/platform-browser';
import { TrendingMovieComponent } from './components/trending-movie/trending-movie.component';

const routes: Routes = [{path : '', redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent , title:"Home"},
  {path:"trendingMovies", component:TrendingMovieComponent , title:"Trending Movies"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
