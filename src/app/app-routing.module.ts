import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Title } from '@angular/platform-browser';
import { TrendingMovieComponent } from './components/trending-movie/trending-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'details/:id/:mediaType', component: MovieDetailsComponent, title: 'Details' },
  {
    path: 'trending',
    component: TrendingComponent,
    children: [
      { path: '', redirectTo: 'trending/trendingMovies', pathMatch: "prefix" },
      {
        path: 'trendingMovies',
        component: TrendingMovieComponent,
        title: 'Trending Movies',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
