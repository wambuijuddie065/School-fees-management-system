import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentInterface } from '../interfaces/studentInterface';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[StudentsService]
})
export class DashboardComponent implements OnInit {
  studentsArr!:StudentInterface[]

  constructor(
    private studentService:StudentsService, 
    private route:Router
  ) { }

  student:StudentInterface={
    regNo:0,
    name:'',
    feePaid:0,
    schoolFee:40000
  }

  ngOnInit(): void {
    this.studentsArr=this.studentService.getStudents()
  }
  

  onAdd(){
    
      this.studentService.addStudent(this.student)
    
   
    
  }
  getBalance(schoolFees:number,paidFees:number){
    const diff=schoolFees-paidFees
    return diff
      
  }
  showStudentDetails(i:number)
  {this.route.navigate(['student',i])


  }
  

}
