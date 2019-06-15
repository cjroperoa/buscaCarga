import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // public appPages = [
  //   {
  //     title: 'Nuevo Envío',
  //     url: '/new-shipment-category',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'Membresia',
  //     url: '/membership-photo',
  //     icon: 'cash'
  //   },
  //   {
  //     title: 'Ofertas',
  //     url: '/my-offers',
  //     icon: 'cart'
  //   },
  //   {
  //     title: 'Mis Envios',
  //     url: '/my-publishings',
  //     icon: 'pin'
  //   }
  // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(
        state => {
          console.log('Auth changed: ', state);
  
          if (state){
            this.router.navigate(['pages',  'new-shipment-category']);
          } else {
            this.router.navigate(['login']);
          }
        });
      });
  }
}
