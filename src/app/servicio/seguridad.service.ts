import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService implements CanActivate {

  constructor(private AFAuth: AngularFireAuth, private router: Router) { }

  /*
  Este metodo revisa si el usuario esta conectado o no.
  */
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  return this.AFAuth.authState.pipe(map(auth => {
    if ( !isNullOrUndefined(auth) ) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }));
}
}
