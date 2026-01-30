import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure:false
})
export class AgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
    const today=new Date();
    const birthDate=new Date(value as string);
    let age=today.getFullYear()-birthDate.getFullYear();
    if(birthDate.getMonth()>today.getMonth() || (birthDate.getMonth()===today.getMonth() && birthDate.getDate()>today.getDate())){
      age--;
    }
    return age;





  }

}
