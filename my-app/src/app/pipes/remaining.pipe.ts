import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(value: string,size:number, ...args: unknown[]): unknown {
 return size- value.length;

  }

}
