import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  //CanActivateChild, 
  //CanLoad, 
  //Route, 
  //UrlSegment, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  //UrlTree,
  //Router
} from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate /*, CanActivateChild, CanLoad*/ {
  
  constructor(private auth: AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    
    if (this.auth.isAuth()) {
      console.log('paso el guard')
      return true
    } else {
      console.error('Bloqueado')
      return false
    }

  }

  /*
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  /* */
}
