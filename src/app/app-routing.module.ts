import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Title } from '@angular/platform-browser';
import { TrendingMovieComponent } from './components/trending-movie/trending-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { TopImdbComponent } from './components/top-imdb/top-imdb.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'details/:id/:mediaType', component: MovieDetailsComponent, title: 'Details' },
  { path: 'movies', component: MoviesComponent, title: 'Popular Movies' },
  { path: 'tvShow', component: TvShowComponent, title: 'Popular Shows' },
  { path: 'TopIMDB', component: TopImdbComponent, title: 'Popular TopIMDB' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
