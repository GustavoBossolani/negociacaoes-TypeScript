export function exibirMensagem() {

    return function (constructor: any) {

        // guarda o constructor original, pois iremos definir um novo
        const original = constructor;

        // criando um novo construtor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novoConstrutor: any = function (...args: any[]) {
            console.log(`Estou criando uma nova instancia do construtor: ${original.name}`);
            return new original(...args);
        }
        // importante! O prototype do novo constructor deve ser o mesmo do original
        novoConstrutor.prototype = original.prototype;
        // retorna o novo constructor
        return novoConstrutor;
    }
}