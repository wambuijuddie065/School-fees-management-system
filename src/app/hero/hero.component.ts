import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../Services/auth-guard.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(public authGuard:AuthGuardService) { }

  ngOnInit(): void {
  }

}
