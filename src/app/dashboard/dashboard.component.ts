import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentInterface } from '../interfaces/studentInterface';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [StudentsService],
})
export class DashboardComponent implements OnInit {
  studentsArr!: StudentInterface[];

 

  constructor(public studentService: StudentsService, private route: Router) {}

  student: StudentInterface = {
    regNo: '',
    name: '',
    feePaid: 0,
    schoolFee: 40000,
  };


  @ViewChild('reg')reg!:ElementRef
  @ViewChild('nam')nam!:ElementRef
  @ViewChild('fee')fee!:ElementRef

  

  ngOnInit(): void {
    
    this.studentsArr = this.studentService.getStudents();
  }

  // renderStudent(status:string){
  //    if(status ==='withBal'){
  //     this.studentService.getStudents()
  //     console.log('with bal');
      
  //    }else if(status === 'withNoBal'){
  //     this.studentService.getStudents().filter(student =>student.feePaid >= 40000)
  //     console.log('without bal');
  //    }else{
  //     this.studentsArr =  this.studentService.getStudents()
  //     console.log('all');
  //    }
  
  // }

  
  status:string='all'
changeValue(val:string){
  this.status=val

}
  onAdd(reg:string, name:string, fee:string) {
    this.studentService.addStudent({
      name,
      regNo:reg,
      feePaid:+fee,
      schoolFee:40000
    })
    this.clear()
    
    
  }
  clear(){
   
  this.student.name=''
  this.student.regNo=''
  this.student.feePaid=0
  this.student.schoolFee=40000
  }
  getBalance(schoolFees: number, paidFees: number) {
    const diff = schoolFees - paidFees;
    return diff;
  }
  showStudentDetails(i: number) {
    this.route.navigate(['student', i]);
  }
  isShowDiv=false
  toggleDisplayDiv(){
    this.isShowDiv=!this.isShowDiv
  }
 
  buttonStyles() {
    return {
      height: '80px',
      padding: '5px',
      backgroundColor: '#C4A484',
      borderRadius: '20px',

      fontSize: '18px',
    };
  }
  formDivStyles(){
    return{ display: 'flex', gap: '10px',padding:'10px', marginLeft:'400px' }
  }
  addInputs() {
    return {
      padding: '5px',
      width: '220px',
    };
  }
  addBtnStyles() {
    return {
      backgroundColor: '#C4A484',
      height: '50px',
      width: '120px',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
    };
  }
  allButtonsDivStyles() {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-between',
      gap: '30px',
      width: '25%',
      borderRight: 'solid 1px grey',
      padding: '10px',
      height: '700px',
      backgroundColor: '#C4A484',
    };
  }
  columnHeadingStyles() {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
      height: '20px',
      padding: '5px',
    };
  }
  displayStudentDivStyles() {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '5px 10px 18px #888888',
      marginBottom: '50px',
      height: '50px',
      padding: '20px',
    };
  }
}
