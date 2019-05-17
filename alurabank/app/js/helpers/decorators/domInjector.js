System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInjector(seletor) {
        return function (target, key) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    console.log(`Buscando {${seletor}} dentro de target do tipo:${target} para injetar em {${key}}!`);
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("domInjector", domInjector);
    return {
        setters: [],
        execute: function () {
        }
    };
});
