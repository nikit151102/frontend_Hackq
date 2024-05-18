import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private route: ActivatedRoute, private router: Router) {}
  
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }



}