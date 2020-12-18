import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable()
export class FireAuthService {
  constructor(private afAuth: AngularFireAuth) {}

  signup(email: string, password: string): void {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => auth.user.sendEmailVerification())
      .then(() => alert('メールアドレス確認メールを送信しました。'))
      .catch((err) => {
        console.log(err);
        alert('アカウントの作成に失敗しました。\n' + err);
      });
  }

  signin(email: string, password: string): void {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // メールアドレス確認が済んでいるかどうか
        if (!auth.user.emailVerified) {
          this.afAuth.signOut();
          return Promise.reject('メールアドレスが確認できていません。');
        } else {
        }
      })
      .then(() => alert('ログインしました。'))
      .catch((err) => {
        console.log(err);
        alert('ログインに失敗しました。\n' + err);
      });
  }

  signout(): void {
    this.afAuth
      .signOut()
      .then(() => {})
      .then(() => alert('ログアウトしました。'))
      .catch((err) => {
        console.log(err);
        alert('ログアウトに失敗しました。\n' + err);
      });
  }

  googleSignIn() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return this.oAuthSignIn(provider);
  }

  facebookSignIn() {
    const provider = new firebase.default.auth.FacebookAuthProvider();
    return this.oAuthSignIn(provider);
  }

  private async oAuthSignIn(provider: firebase.default.auth.AuthProvider) {
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
    } catch (err) {
      return console.log(err);
    }
  }
}
