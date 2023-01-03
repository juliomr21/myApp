import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bancoNome'
})
export class BancoNomePipe implements PipeTransform {

  transform(list_banco: any[],cod: any, ...args: unknown[]): unknown {
    
   var banco: any =   list_banco.find(item => item.cod_banco == cod)
    return banco.nome;
  }

}
