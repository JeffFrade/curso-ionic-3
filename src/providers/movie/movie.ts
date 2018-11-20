import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private url:string = 'https://api.themoviedb.org/3';

  constructor(public http: HttpClient) {

  }

  getLatestMovies(page = 1) {
    return this.http.get(this.url + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  getMovieDetails(movie) {
    return this.http.get(this.url + `/movie/${movie}?api_key=` + this.getApiKey());
  }

  private getApiKey(): string {
    return 'ddbd5418cc735dad362565a621beeb4e';
  }
}
