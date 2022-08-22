import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School-Management';
  constructor(private route:Router , 
    public authGuard:AuthGuardService){}

    
    logout(){
      this.authGuard.logout()
      this.route.navigate(['home'])
    }


 
}
