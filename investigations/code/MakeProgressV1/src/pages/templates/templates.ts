import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AddtemplatePage } from '../addtemplate/addtemplate';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

/**
 * Generated class for the TemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-templates',
  templateUrl: 'templates.html',
})
export class TemplatesPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatesPage');
  }

  gotoAddTemplate() {
    this.navCtrl.push(AddtemplatePage);
  }

  noEvents() {
      return Events.length == 0;
  }
}
