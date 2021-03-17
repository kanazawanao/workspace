import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}
  canActivate(): Observable<boolean> {
    return this.afAuth.user.pipe(
      map((user) => {
        console.log(user);
        if (user === null) {
          this.router.navigate(['/']);
        }
        return true;
      })
    );
  }
}
