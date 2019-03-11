import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemplatesPage } from '../templates/templates';
import { templateJitUrl } from '@angular/compiler';

/**
 * Generated class for the AddtemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtemplate',
  templateUrl: 'addtemplate.html',
})
export class AddtemplatePage {

  tempName: any;
  tempDesc: any;
  attributes: any;
  data : boolean;
  public anArray:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtemplatePage');
  }

  selectChange() {
    alert(this.attributes);
  }

  done() {
    this.navCtrl.push(TemplatesPage);
  }

  goTo(){
    console.log('this.anArray',this.anArray);
    this.data=true;
  }

  addAtt() {
    this.anArray.push({'value':''});
  }

  delAttribute() {
    this.anArray.splice('value', 1);
  }

  template(name, desc, attributes) { 
    var result = {
      name : name,
      desc : desc,
      attributes : []
    }
    return result;
  }
}
