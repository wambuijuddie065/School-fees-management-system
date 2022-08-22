import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  isLoggedIn:boolean=false
  login(){
    this.isLoggedIn=true
  }
  logout(){
    this.isLoggedIn=false
  }
  isAuthenticated(){
    return this.isLoggedIn
  }
}
