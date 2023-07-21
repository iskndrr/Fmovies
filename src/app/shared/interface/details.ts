import { SafeScript } from '@angular/platform-browser';

export interface Details {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  genres: Genres[];
  production_countries: Production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  // tv only
  name: string;
  episode_run_time: string[];
  first_air_date: string;
  last_episode_to_air: last_episode_to_air;
  next_episode_to_air:any
  networks:networks[]
  number_of_episodes:number
  number_of_seasons:number
  origin_country:string
  original_name:string
  seasons:seasons[]
  created_by:created_by[]
  in_production:boolean
}
interface Genres {
  id: number;
  name: string;
}
interface Production_countries {
  iso_3166_1: string;
  name: string;
}
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

// tvonly

interface last_episode_to_air {

  id:number
  name:string
  overview:string
  vote_average:string
  vote_count:string
  air_date:string
  episode_number:string
  production_code:string
  runtime:any
  season_number:number
  show_id:number
  still_path:any
}

interface networks{
  id:number
  logo_path:string
  name:string
  origin_country:string
}


interface seasons{
  air_date:seasons
  episode_count:number
  id:number
  name:seasons
  overview:string
  poster_path:any
  season_number:number
  vote_average:number
}

interface created_by{
  id:number
  name:string
  profile_path:string
}
