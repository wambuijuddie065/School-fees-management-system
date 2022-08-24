import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { StudentsGuardService } from './Services/students-guard.service';
import { WithBalancePipe } from './Pipes/with-balance.pipe';
import { WithoutBalancePipe } from './Pipes/without-balance.pipe';
import { CapitalizationPipe } from './Pipes/capitalization.pipe';
import { BackgroundDirective } from './background.directive';




const appRouter:Routes=[
  // {path:'', component: HeroComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HeroComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,children:[
    {path:'student/:id',component: StudentComponent}
  ],canActivate:[StudentsGuardService]},
 
  {path:'**',component:PageNotFoundComponent},
 

]

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    StudentComponent,
    WithBalancePipe,
    WithoutBalancePipe,
    CapitalizationPipe,
    BackgroundDirective,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [AuthGuardService,StudentsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
