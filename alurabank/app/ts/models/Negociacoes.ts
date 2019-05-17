import { Negociacao } from './index';
import { IndexInterface } from './Interfaces/IndexInterface';

export class Negociacoes implements IndexInterface<Negociacoes>{

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.negociacoes);
    }

    paraTexto(): void {
        console.log('-- IMPRESSÃO --');
        console.log(JSON.stringify(this._negociacoes));
    }

    private _negociacoes: Negociacao[] = [];

    // @logarTempoDeExecucao()
    adciona(negociacao:Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    // @logarTempoDeExecucao(true)
    negociacoes(): Negociacao[]{
        
        //Convertendo a cópia da lista de negociações para Negociacao antes do retorno, evitando tipos undefined ou null
        return ([] as Negociacao[]).concat(this._negociacoes); //Estaa expressão é uma Type assertions
        
        
        //Outro exemplo de Type assertions
        // let lista: Negociacao[] = [];
        // return (<Negociacao[]>lista).concat(this._negociacoes);
    }
}