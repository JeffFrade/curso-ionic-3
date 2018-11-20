import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ConfigsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configs',
  templateUrl: 'configs.html',
})
export class ConfigsPage {
  rootPage = ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  openAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    
  }
}
