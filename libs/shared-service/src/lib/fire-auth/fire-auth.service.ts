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

  googleSignIn(): Promise<boolean> {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return this.oAuthSignIn(provider);
  }

  facebookSignIn(): Promise<boolean> {
    const provider = new firebase.default.auth.FacebookAuthProvider();
    return this.oAuthSignIn(provider);
  }

  appleSignIn() {}

  twitterSignIn(): Promise<boolean> {
    const provider = new firebase.default.auth.TwitterAuthProvider();
    return this.oAuthSignIn(provider);
  }

  private async oAuthSignIn(
    provider: firebase.default.auth.AuthProvider
  ): Promise<boolean> {
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
