import { Pipe, PipeTransform } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return value;
  }

}
