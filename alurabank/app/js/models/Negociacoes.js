System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                ehIgual(objeto) {
                    return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.negociacoes);
                }
                paraTexto() {
                    console.log('-- IMPRESSÃO --');
                    console.log(JSON.stringify(this._negociacoes));
                }
                adciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                negociacoes() {
                    return [].concat(this._negociacoes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
