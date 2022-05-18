/**
 * Serviço responsável por executar as operações da calculadora
 * @author Kalleo Leandro dos Santos Leal
 * @since 17/05/2022
 * 
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO:string = '/';
  static readonly MUTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;// armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        if(num2 != 0)
        {
          resultado = num1 / num2;
        }
        break;
      case CalculadoraService.MUTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }
  
}