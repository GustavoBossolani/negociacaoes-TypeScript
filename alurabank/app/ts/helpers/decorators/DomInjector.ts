export function domInjector(seletor: string) {

    // target = referência da classe que possue o  atributo que foi marcado
    // key = nome do atributo que foi marcado
    return function (target: any, key: string) {

        let elemento: JQuery;
        // Criando o getter
        const getter = function () {

            // Verificando se exite um elemento na variável
            // Caso tenha vamos simplesmente retorna-lo
            // Caso não tenha vamos busca-lo no DOM
            if (!elemento) {
                console.log(`Buscando {${seletor}} dentro de target do tipo:${target} para injetar em {${key}}!`);
                elemento = $(seletor);
            }
            return elemento;
        }

        // Substituindo a propriedade marcada pelo getter criado (var getter)
        Object.defineProperty(target, key, {
            get: getter
        });

    }
}