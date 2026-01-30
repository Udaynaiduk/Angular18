import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nrc'
})
export class NrcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): Date {
    let nrc=(value as string).toString()
   let year = 20 + nrc.substring(3, 5);
   console.log(year);
    let month = nrc.substring(5, 7);
    console.log(month);
    let day = nrc.substring(7, 9);
    console.log(day);
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

}
