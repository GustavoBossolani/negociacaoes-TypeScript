import { exibirMensagem } from "../helpers/decorators/index";
import { IndexInterface } from "./Interfaces/IndexInterface";

enum diaSemana { Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado }

@exibirMensagem()
export class Negociacao implements IndexInterface<Negociacao> {

    ehIgual(objeto: Negociacao): boolean {
        return this.data.getDate() == objeto.data.getDate()
            && this.data.getMonth() == objeto.data.getMonth()
            && this.data.getFullYear() == objeto.data.getFullYear();
    }

    paraTexto(): void {
        console.log("---IMPRESSÃO---");
        console.log(`
            Data:${this.data},
            Valor:${this.valor},
            Quantidade:${this.quantidade}
            Volume:${this.volume}
        `);
    }

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    //Não é necessário gets e sets em atributos readonly
    // get data(): Date{
    //     return this._data;
    // }

    // get quantidade(): number{
    //     return this._quantidade;
    // }

    // get valor(): number{
    //     return this._valor;
    // }

    //Fazendo a verificação de data abtes de inserir a negociação no array
    public ehDiaUtil(data: Date): boolean {
        return data.getDay() != diaSemana.Sabado && data.getDay() != diaSemana.Domingo;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}