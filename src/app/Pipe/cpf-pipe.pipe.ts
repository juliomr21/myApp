import { Pipe, PipeTransform } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let x = '********'+ value.slice(8,9);
    let y = '-'+value.slice(9,11);
    return x+y;
  }

}
