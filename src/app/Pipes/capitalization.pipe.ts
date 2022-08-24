import { Pipe, PipeTransform } from '@angular/core';
import { StudentsService } from '../students.service';

@Pipe({
  name: 'capitalization'
})
export class CapitalizationPipe implements PipeTransform {
  constructor(studentService:StudentsService){}

  transform(value:any) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase()
  }

}
