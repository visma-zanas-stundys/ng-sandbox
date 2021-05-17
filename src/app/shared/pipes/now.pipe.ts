import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'now',
})
export class NowPipe implements PipeTransform {
  transform(value: string): unknown {
    return `${value}${new Date().toISOString()}`;
  }
}
