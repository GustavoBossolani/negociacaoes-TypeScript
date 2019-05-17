// Exemplo de Union Types (verificação ou nos argumentos do método)
function processaToken(token: string | number) {

    //Exemplo de Type Guards (verificando o tipo do argumento)
    if (typeof (token) === "string") {

        //Replace só existe em String portânto o TypeScript detecta com seu autocomplete 
        return token.replace(/2/g, 'X');
    } else {
        //toFixed só existe em number portânto o TypeScript detecta com seu autocomplete 
        return token.toFixed().replace(/2/g, 'X');
    }

}
//Fazendo as verificações do compilador
export class Teste {

    testaTeste(): void {
        const token = processaToken(123);
        const token1 = processaToken('123');
    }

    //Aplicanto Alias ao envés de Union Types
    /*
        O Type alias é interessante quando trabalhamos com muitos union types
        e queremos padronizar em um único local esses conjunto de tipos.
    */
    testeAlias() {
        type NovoToken = string | number;

        function processaToken(token: NovoToken) {
            if (typeof (token) === "string") {
                return token.replace(/2/g, 'X');
            } else {
                return token.toFixed().replace(/2/g, 'X');
            }
        }
    }
}

