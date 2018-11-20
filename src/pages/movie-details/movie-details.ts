import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [
    MovieProvider
  ]
})
export class MovieDetailsPage {
  public image_url: string = 'https://image.tmdb.org/t/p/w500/';
  public movie;
  public movie_id;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.movie_id = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.movie_id).subscribe(data => {
      this.movie = data;
    }, error => {
      console.log(error);
    });
  }

}
