import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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

  login(email: string, password: string): void {
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

  logout(): void {
    this.afAuth
      .signOut()
      .then(() => {})
      .then(() => alert('ログアウトしました。'))
      .catch((err) => {
        console.log(err);
        alert('ログアウトに失敗しました。\n' + err);
      });
  }
}
