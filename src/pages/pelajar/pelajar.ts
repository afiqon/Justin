import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PelajarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pelajar',
  templateUrl: 'pelajar.html',
})
export class PelajarPage {
  Url = 'http://localhost:1440/api/pelajar'
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

    console.log('ionViewDidLoad PelajarPage');
  }

}

