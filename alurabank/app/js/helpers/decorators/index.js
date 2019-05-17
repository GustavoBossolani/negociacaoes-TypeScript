System.register(["./LogarTempoDeExecucao", "./DomInjector", "./ExibirMensagem", "./Throttle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (LogarTempoDeExecucao_1_1) {
                exportStar_1(LogarTempoDeExecucao_1_1);
            },
            function (DomInjector_1_1) {
                exportStar_1(DomInjector_1_1);
            },
            function (ExibirMensagem_1_1) {
                exportStar_1(ExibirMensagem_1_1);
            },
            function (Throttle_1_1) {
                exportStar_1(Throttle_1_1);
            }
        ],
        execute: function () {
        }
    };
});
