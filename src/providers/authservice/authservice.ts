import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {
  apiUrl = "http://localhost:1440/api";

  constructor(public http: Http) {
    console.log("Hello AuthserviceProvider Provider");
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ "Content-Type": "application/json" });
      console.log(credentials);
      this.http
        .post(this.apiUrl + "/" + type, JSON.stringify(credentials), {
          headers: headers
        })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  saveKehadiran(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ "Content-Type": "application/json" });
      console.log(data);
      this.http
        .post(this.apiUrl + "/saveKehadiran", JSON.stringify(data), {
          headers: headers
        })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
