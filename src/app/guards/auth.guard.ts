import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /* Si devolvemos true -> cargamos la ruta. false-> no cargamos la ruta
       */
      let token= sessionStorage.getItem('token');

      if(token){
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;

      }  
    }
  
}
