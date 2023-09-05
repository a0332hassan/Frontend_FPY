import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class studentAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkAuthentication();
  }

  private checkAuthentication(): boolean {
    if (this.authService.isStudentLoggedIn == true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

