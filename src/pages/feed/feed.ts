import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public movies_list;
  public page = 1;
  public image_url: string = 'https://image.tmdb.org/t/p/w500/';
  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  public infiniteScroll;

  public object_feed = {
      title: "Marty McFly",
      date: "November 5, 1955",
      description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      likes: 12,
      comments: 4,
      time_comment: "11h ago"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider, public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading movies..."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.loadMovies();
  }

  ionViewDidEnter() {
    this.loadMovies();
  }

  showDetails(movie) {
    this.navCtrl.push(MovieDetailsPage, {id: movie.id});
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadMovies(true);
  }

  loadMovies(newPage: boolean = false) {
    this.presentLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(data => {

      if (newPage) {
        this.movies_list = this.movies_list.concat((data as any).results);
        this.infiniteScroll.complete();
      }  else {
        this.movies_list = (data as any).results;
      }

      this.closeLoading();

      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, error => {
      console.log(error);
      this.closeLoading();
    });
  }
}
