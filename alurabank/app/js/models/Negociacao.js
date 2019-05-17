System.register(["../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, diaSemana, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            (function (diaSemana) {
                diaSemana[diaSemana["Domingo"] = 0] = "Domingo";
                diaSemana[diaSemana["Segunda"] = 1] = "Segunda";
                diaSemana[diaSemana["Terca"] = 2] = "Terca";
                diaSemana[diaSemana["Quarta"] = 3] = "Quarta";
                diaSemana[diaSemana["Quinta"] = 4] = "Quinta";
                diaSemana[diaSemana["Sexta"] = 5] = "Sexta";
                diaSemana[diaSemana["Sabado"] = 6] = "Sabado";
            })(diaSemana || (diaSemana = {}));
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                ehIgual(objeto) {
                    return this.data.getDate() == objeto.data.getDate()
                        && this.data.getMonth() == objeto.data.getMonth()
                        && this.data.getFullYear() == objeto.data.getFullYear();
                }
                paraTexto() {
                    console.log("---IMPRESSÃO---");
                    console.log(`
            Data:${this.data},
            Valor:${this.valor},
            Quantidade:${this.quantidade}
            Volume:${this.volume}
        `);
                }
                ehDiaUtil(data) {
                    return data.getDay() != diaSemana.Sabado && data.getDay() != diaSemana.Domingo;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
            };
            Negociacao = __decorate([
                index_1.exibirMensagem()
            ], Negociacao);
            exports_1("Negociacao", Negociacao);
        }
    };
});
