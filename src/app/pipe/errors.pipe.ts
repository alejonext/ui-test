import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {

  transform(value: any = {}, is: boolean= false): any {
    const me = Object.keys(value || {});
    if (is) {
      return me.length === 0;
    }

    return me[0];
  }

}
