import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class FireAuthService {
  user: Observable<firebase.default.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  async signup(email: string, password: string): Promise<boolean> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  async signin(email: string, password: string): Promise<boolean> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  async signout(): Promise<boolean> {
    return this.afAuth
      .signOut()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  googleSignIn() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    this.oAuthSignIn(provider);
  }

  facebookSignIn() {
    const provider = new firebase.default.auth.FacebookAuthProvider();
    this.oAuthSignIn(provider);
  }

  private async oAuthSignIn(provider: firebase.default.auth.AuthProvider) {
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
    } catch (err) {
      console.log(err);
    }
  }
}
