import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../Services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string=''
  pwd:string=''
  errMessage:string=''

  constructor(private authGuard:AuthGuardService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.email!=='judy@gamail.com'&& this.pwd!=='judy12345') {
      this.errMessage='Invalid details!'
      this.authGuard.logout()
      
    } else {
      this.router.navigate(['dashboard'])
      this.authGuard.login()
      
    }
   
  }
  mainLoginDivStyles(){return{
    width:'30%',
    height:'500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
    alignContent: 'center',backgroundColor:'#C4A484',
    margin:'50px auto',padding:'10px'
  }
    
  }
  loginDivsStyles(){
    return{
      display: 'flex', 
      flexDirection: 'column',
       gap: '5px'
    }
  }
  loginInputStyles(){
   return {
    height: '40px', 
    width: '350px' 

    }
  }
  loginBtnStyles(){
    return{
      backgroundColor: '#5A1013',
      height: '50px',
      width: '360px',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      marginTop: '20px'
    }
  }


}
