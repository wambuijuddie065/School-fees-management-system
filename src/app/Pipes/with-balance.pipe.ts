import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from '../interfaces/studentInterface';
import { StudentsService } from '../students.service';

@Pipe({
  name: 'withBalance'
})
export class WithBalancePipe implements PipeTransform {

 
  constructor(private studentService:StudentsService){}
  transform(value:StudentInterface[] , feePaid:number):StudentInterface[]{
    return value.filter(function(data:StudentInterface){
      return Number(data.feePaid)<40000
    })
  }

}
