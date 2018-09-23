import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
/**
 * Generated class for the JadualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadual',
  templateUrl: 'jadual.html',
})
export class JadualPage {
  Url = 'http://localhost:1440/api/jadual'
  jaduals:any;

  constructor(public navCtrl: NavController, public http:Http) {
    
    this.http.get(this.Url)
    .map(res => res.json())
    .subscribe(data => {
      this.jaduals = data;
      console.log(data);
    });

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad jadualPage');
  }

}
