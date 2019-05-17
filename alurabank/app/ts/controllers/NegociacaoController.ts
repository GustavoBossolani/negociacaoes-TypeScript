import { domInjector, exibirMensagem, throttle } from '../helpers/decorators/index';
import { imprime } from '../helpers/index';
import { Negociacao, Negociacoes } from '../models/index';
import { NegociacaoService } from '../services/index';
import { MensagemView, NegociacoesView } from '../views/index';

@exibirMensagem()
export class NegociacaoController {

    //Atributos antigos
    // private _inputData: HTMLInputElement;
    // private _inputQuantidade: HTMLInputElement;
    // private _inputValor: HTMLInputElement;

    @domInjector('#data')
    private _inputData: JQuery;

    @domInjector('#quantidade')
    private _inputQuantidade: JQuery;

    @domInjector('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _mensagemImportView = new MensagemView('#mensagemImport', true);
    private service = new NegociacaoService();

    constructor() {
        //Atribuições antigas usando apenas JavaScript
        // this._inputData = <HTMLInputElement>document.querySelector('#data');
        // this._inputQuantidade = document.querySelector('#quantidade');
        // this._inputValor = document.querySelector('#valor');

        //Atribuições usando JQuery
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');

        this._negociacoesView.update(this._negociacoes);
    }

    @throttle(500)
    adciona() {

        //Adcionando Negociação da maneira antiga
        // this._negociacoes.adciona(
        //     new Negociacao(
        //         new Date(this._inputData.value.replace(/-/g, ',')),
        //         parseInt(this._inputQuantidade.value),
        //         parseFloat(this._inputValor.value)
        //     ));

        let data: Date = new Date(this._inputData.val().toString().replace(/-/g, ','));
        let negociacao = new Negociacao(data, parseInt(this._inputQuantidade.val()), parseInt(this._inputValor.val()));

        if (negociacao.ehDiaUtil(data)) {
            //Adcionando com JQuery
            this._negociacoes.adciona(negociacao);

            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update("Negociação adcionada com sucesso!", "alert-success");

        } else {
            this._mensagemView.update('Negociações são disponiveis apenas em dias Uteis!', 'alert-danger');
        }

        imprime(negociacao, this._negociacoes);
    }

    // o método importDados é um método async!
    @throttle()
    async importar() {

        // Opções para implementar isOk

        // function isOk(resposta: Response) {
        //     if (resposta.ok) {
        //         return resposta;
        //     } else {
        //         throw new Error(resposta.statusText);
        //     }
        // }

        // const isOk = (res: Response) => {
        //     if(res.ok) return res;
        //     throw new Error(res.statusText);
        // }

        // this.service.obterNegociacoes(res => {
        //     if (res.ok) return res;
        //     throw new Error(res.statusText);
        // })
        //     .then((negociacoesParaImportar: Negociacao[]) => {
        //         const negociacoesJaImportadas = this._negociacoes.negociacoes();
        //         negociacoesParaImportar
        //             .filter(negociacao =>
        //                 !negociacoesJaImportadas.some(JaImportada => negociacao.ehIgual(JaImportada)))
        //             .forEach(negociacao => this._negociacoes.adciona(negociacao));

        //         this._negociacoesView.update(this._negociacoes);
        //         this._mensagemImportView.update('Negociações importadas com sucesso!', 'alert-success');

        //     }).catch(err => {
        //         new MensagemView('#mensagemImport', true).update(err.message, 'alert-danger');
        //     });

        try {
            const negociacoesParaImportar = await this.service.obterNegociacoes(res => {
                if (res.ok) return res;
                throw new Error(res.statusText);
            });

            const negociacoesJaImportadas = this._negociacoes.negociacoes();

            negociacoesParaImportar
                .filter(negociacao =>
                    !negociacoesJaImportadas.some(jaImportada =>
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao =>
                    this._negociacoes.adciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
            this._mensagemImportView.update('Negociações importadas com sucesso!', 'alert-success');
        } catch (error) {
            this._mensagemImportView.update(error.message, 'alert-danger');
        }
        imprime(this._negociacoes);


        /*
        Para consumirmos a API externa, utilizaremos a API fetch que usa o padrão de projeto Promise. 
        Por usar Promise, seu uso é mais simplificado do que trabalharmos com XMLHttpRequest
        */

        /*
        fetch('http://localhost:8080/dados')
            .then(resposta => isOk(resposta))  // verificando se foi retornado status OK
            .then(resposta => resposta.json()) // recuperando a resposta e convertendo para Obj JavaScript 
            .then((dados: NegociacaoParcial[]) => { // recuperando a lista de objetos recuperada e convertendo cada um para Negociacao 
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)) // retornando uma lista de negociações []
                    .forEach(negociacao => this._negociacoes.adciona(negociacao)); // iterando na lista retornada e adcionando em negociacoes
                this._negociacoesView.update(this._negociacoes); // adcionando a nova lista ao template de View e atualizando o DOM
                this._mensagemImportView.update('Negociações importadas com sucesso!', 'alert-success');
            })
            .catch(error => {
                console.log(error.message);
                this._mensagemImportView.update('Não foi possível importar as Negociações', 'alert-danger');
            }); // caso um erro for retornado o catch fará o tratamento do mesmo jogando no console
        */
    }
}
