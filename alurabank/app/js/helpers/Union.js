System.register([], function (exports_1, context_1) {
    "use strict";
    var Teste;
    var __moduleName = context_1 && context_1.id;
    function processaToken(token) {
        if (typeof (token) === "string") {
            return token.replace(/2/g, 'X');
        }
        else {
            return token.toFixed().replace(/2/g, 'X');
        }
    }
    return {
        setters: [],
        execute: function () {
            Teste = class Teste {
                testaTeste() {
                    const token = processaToken(123);
                    const token1 = processaToken('123');
                }
                testeAlias() {
                    function processaToken(token) {
                        if (typeof (token) === "string") {
                            return token.replace(/2/g, 'X');
                        }
                        else {
                            return token.toFixed().replace(/2/g, 'X');
                        }
                    }
                }
            };
            exports_1("Teste", Teste);
        }
    };
});
