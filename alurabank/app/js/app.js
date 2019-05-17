System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, negociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            negociacaoController = new index_1.NegociacaoController();
            $('.form').submit(negociacaoController.adciona.bind(negociacaoController));
            $('#botao-importar').click(negociacaoController.importar.bind(negociacaoController));
        }
    };
});
