import { Injectable } from '@angular/core';
import { StudentInterface } from './interfaces/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
   }
  private studentsArr:StudentInterface[]=[
    
  ]
  // gettudent()
  addStudent(newStudent:StudentInterface){
    this.studentsArr.push(newStudent)
    console.log("added and cleared");
    console.log(this.studentsArr);
    
    

  }
  getStudents(){
   
   
    return this.studentsArr;
  }
  getStudent(index:number){
    return this.studentsArr[index]

  }
  
}
