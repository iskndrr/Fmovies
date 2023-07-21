import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendingMovieComponent } from './components/trending-movie/trending-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { UpComingMoviesComponent } from './components/up-coming-movies/up-coming-movies.component'
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VidPlayerComponent } from './components/vid-player/vid-player.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingTvComponent } from './components/trending-tv/trending-tv.component';
import { TvCardComponent } from './components/tv-card/tv-card.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    TrendingMovieComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    UpComingMoviesComponent,
    VidPlayerComponent,
    TrendingComponent,
    TrendingTvComponent,
    TvCardComponent,
    MoviesComponent,
    TvShowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
