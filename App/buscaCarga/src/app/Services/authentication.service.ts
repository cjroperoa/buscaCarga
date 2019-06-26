import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
// import storage and platform
import { Storage } from "@ionic/storage";


// create const with TOKEN
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Object instance sesion
  authenticationState = new BehaviorSubject( false );

  constructor(
    // instance constructor
    private storage: Storage,
    private platform: Platform
  ) {
  this.platform.ready().then(() => {
    this.checkToken();
  })
   };

  login() { 
    return this.storage.set(TOKEN_KEY, 'Bearer 123456').then( res => {
      this.authenticationState.next(true);
      console.log(this.authenticationState);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
  
  isActivated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (!res) {
        this.authenticationState.next(true);
      }
    });
  }

}
