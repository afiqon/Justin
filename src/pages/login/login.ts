import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  responseData:any;
  userData = { email: "", password: "",};

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,public authService: AuthserviceProvider) {
    this.menu.swipeEnable(false);
  }

  
  // login and go to home page
  login() {
    if (this.userData.email && this.userData.password) {
      console.log(this.userData);
      this.authService.postData(this.userData, "login").then(
        result => {
          this.responseData = result;
          console.log(this.responseData);
          if (this.responseData.code === 200) {
            localStorage.setItem("userData", JSON.stringify(this.responseData.data));
            console.log(this.responseData.data);
            this.nav.setRoot(HomePage);
          } else {
            let alert = this.forgotCtrl.create({
              title: "Login failed!",
              subTitle: "Wrong credentials",
              buttons: ["OK"]
            });
            alert.present();
          }
        },
        err => {
          //Connection failed message
        }
      );
    } else {
      let alert = this.forgotCtrl.create({
        title: "Login failed!",
        subTitle: "Wrong credentials",
        buttons: ["OK"]
      });
      alert.present();
    }
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
