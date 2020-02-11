import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) { }
  ​
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      
        if (JSON.parse(localStorage.getItem('authUser'))){
          return true;
        }else {
          this.router.navigateByUrl('/login')
          return false;
        }
    }
    canDesactivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      
        if (JSON.parse(localStorage.getItem('authUser'))){
          return true;
        }else {
          this.router.navigateByUrl('/login')
          return false;
        }
    }
  
}
