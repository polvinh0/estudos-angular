import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {

  /**
   * pegar um array qualquer e retornar a quantidade de elementos dentro dele
   * 
   * value:responsável por pegar o valor que sera transformado 
   * args:
   * o parametro 'value' no metodo transform é obrigatorio
   * Mas caso queira passaro outros paramentos, isso é possivel.
   */

  

  transform(value:any[]): number {
    return value.length
  }

}
