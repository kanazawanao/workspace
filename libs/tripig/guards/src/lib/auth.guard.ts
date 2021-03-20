import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FireAuthService } from '@workspace/shared-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: FireAuthService) {}
  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      map((user) => {
        if (user === null) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
