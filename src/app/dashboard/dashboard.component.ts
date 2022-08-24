import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    public studentService: StudentsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  student: StudentInterface = {
    regNo: '',
    name: '',
    feePaid: 0,
    schoolFee: 40000,
  };

  @ViewChild('reg') reg!: ElementRef;
  @ViewChild('nam') nam!: ElementRef;
  @ViewChild('fee') fee!: ElementRef;

  ngOnInit(): void {
    this.studentsArr = this.studentService.getStudents();
  }


  status: string = 'all';
  changeValue(val: string) {
    this.status = val;
  }
  onAdd(reg: string, name: string, fee: string) {
    this.studentService.addStudent({
      name,
      regNo: reg,
      feePaid: +fee,
      schoolFee: 40000,
    });
    this.clear();
  }
  clear() {
    this.student.name = '';
    this.student.regNo = '';
    this.student.feePaid = 0;
    this.student.schoolFee = 40000;
  }
  getBalance(schoolFees: number, paidFees: number) {
    const diff = schoolFees - paidFees;
    return diff;
  }
  
  isShowDiv = false;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
