import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 25) {
      return value;
    } else {
      return value.substring(0, 25).concat('...');
    }
  }

}
