import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../Services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authGuard:AuthGuardService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['dashboard'])
    this.authGuard.login()
  }

}
