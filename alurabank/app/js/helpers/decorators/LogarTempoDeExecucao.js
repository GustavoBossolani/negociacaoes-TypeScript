System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(exibirEmSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = 'milesegundos';
                if (exibirEmSegundos) {
                    unidade = 'segundos';
                    divisor = 1000;
                }
                console.log('-------------------------');
                console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const timer1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                console.log(`Retorno do método ${propertyKey}: ${JSON.stringify(retorno)}`);
                const timer2 = performance.now();
                console.log(`${propertyKey} demorou ${(timer2 - timer1) / divisor} ${unidade}.`);
                console.log('-------------------------');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
