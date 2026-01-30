import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agecal'
})
export class AgecalPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(value);
    let age:number=today.getFullYear()-birthDate.getFullYear();
    if(today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age;
  }

}
