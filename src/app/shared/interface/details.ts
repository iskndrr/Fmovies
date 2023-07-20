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
  production_countries:Production_countries[]
  release_date:string
  revenue:number
  runtime:number
  status:string
  tagline:string
  title:string
  video:boolean
  vote_average:number
  vote_count:number
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
