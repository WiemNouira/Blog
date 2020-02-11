import {LoginComponent} from 'src/app/login/login.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, CanLoad, Route, UrlSegment,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LogoutGuard implements CanDeactivate<LoginComponent> {
  constructor(private router: Router) { }
  canDeactivate(component: LoginComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  localStorage.setItem('authUser','false')
                  this.router.navigateByUrl('/login')
                  return false;
  }

}
