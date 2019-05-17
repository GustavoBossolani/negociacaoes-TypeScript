System.register(["../helpers/decorators/index", "../helpers/index", "../models/index", "../services/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_3.Negociacoes();
                    this._negociacoesView = new index_5.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_5.MensagemView('#mensagemView');
                    this._mensagemImportView = new index_5.MensagemView('#mensagemImport', true);
                    this.service = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adciona() {
                    let data = new Date(this._inputData.val().toString().replace(/-/g, ','));
                    let negociacao = new index_3.Negociacao(data, parseInt(this._inputQuantidade.val()), parseInt(this._inputValor.val()));
                    if (negociacao.ehDiaUtil(data)) {
                        this._negociacoes.adciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update("Negociação adcionada com sucesso!", "alert-success");
                    }
                    else {
                        this._mensagemView.update('Negociações são disponiveis apenas em dias Uteis!', 'alert-danger');
                    }
                    index_2.imprime(negociacao, this._negociacoes);
                }
                importar() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const negociacoesParaImportar = yield this.service.obterNegociacoes(res => {
                                if (res.ok)
                                    return res;
                                throw new Error(res.statusText);
                            });
                            const negociacoesJaImportadas = this._negociacoes.negociacoes();
                            negociacoesParaImportar
                                .filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.ehIgual(jaImportada)))
                                .forEach(negociacao => this._negociacoes.adciona(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                            this._mensagemImportView.update('Negociações importadas com sucesso!', 'alert-success');
                        }
                        catch (error) {
                            this._mensagemImportView.update(error.message, 'alert-danger');
                        }
                        index_2.imprime(this._negociacoes);
                    });
                }
            };
            __decorate([
                index_1.domInjector('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_1.domInjector('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_1.domInjector('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_1.throttle(500)
            ], NegociacaoController.prototype, "adciona", null);
            __decorate([
                index_1.throttle()
            ], NegociacaoController.prototype, "importar", null);
            NegociacaoController = __decorate([
                index_1.exibirMensagem()
            ], NegociacaoController);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
