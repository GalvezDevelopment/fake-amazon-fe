import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length > 50) {
      const textShown = value.substring(0, 50);
      const lastWhitespace = textShown.lastIndexOf(' ');
      return value.substring(0, lastWhitespace) + '...';
    }
    return value;
  }

}
