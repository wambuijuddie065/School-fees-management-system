import { Injectable } from '@angular/core';
import { StudentInterface } from './interfaces/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
   }
  private studentsArr:StudentInterface[]=[
    {
      regNo:'1',
      name:'Judy Wambui',
      feePaid:10000,
      schoolFee:40000
    }
  ]
  addStudent(newStudent:StudentInterface){
    this.studentsArr.push(newStudent)

  }
  getStudents(){
    return this.studentsArr
  }
  getStudent(index:number){
    return this.studentsArr[index]

  }
  
}
