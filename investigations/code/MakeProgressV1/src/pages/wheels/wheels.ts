import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddwheelPage } from '../addwheel/addwheel';

/**
 * Generated class for the WheelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wheels',
  templateUrl: 'wheels.html',
})
export class WheelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WheelsPage');
  }

  gotoAddWheel() {
    this.navCtrl.push(AddwheelPage);
  }
}
