System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exibirMensagem() {
        return function (constructor) {
            const original = constructor;
            const novoConstrutor = function (...args) {
                console.log(`Estou criando uma nova instancia do construtor: ${original.name}`);
                return new original(...args);
            };
            novoConstrutor.prototype = original.prototype;
            return novoConstrutor;
        };
    }
    exports_1("exibirMensagem", exibirMensagem);
    return {
        setters: [],
        execute: function () {
        }
    };
});
