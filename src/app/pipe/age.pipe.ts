import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
   const today=new Date()
   const dob=new Date(value as string)
   let age=today.getFullYear()-dob.getFullYear()
   if(today.getMonth()<dob.getMonth() || (today.getMonth()===dob.getMonth() && today.getDate()<dob.getDate())){
    age--
   }
   return age;

  }

}
