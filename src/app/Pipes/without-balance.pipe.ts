import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from '../interfaces/studentInterface';
import { StudentsService } from '../students.service';

@Pipe({
  name: 'withoutBalance'
})
export class WithoutBalancePipe implements PipeTransform {

  constructor(private studentService:StudentsService){}
  transform(value:StudentInterface[] , schoolFee:number):StudentInterface[]{
    return value.filter(function(data:StudentInterface){
      return Number(data.feePaid)>=schoolFee
    })
  }


}
