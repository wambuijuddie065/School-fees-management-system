import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentInterface } from '../interfaces/studentInterface';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student:StudentInterface={
    regNo:'',
    name:'',
    feePaid:0,
    schoolFee:40000
  }
   id!:number;
  constructor(private activatedRoute:ActivatedRoute,private studentService:StudentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value:Params)=>{
      this.id=value['id']
      this.student=this.studentService.getStudent(this.id)
    })
    
  }
  getBalance(schoolFees:number,paidFees:number){
    const diff=schoolFees-paidFees
    return diff
      
  }
 

}
