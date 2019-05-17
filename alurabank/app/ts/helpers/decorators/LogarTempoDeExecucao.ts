export function logarTempoDeExecucao(exibirEmSegundos: boolean = false){


    // target = é aquele que possui uma referência para a classe cujo método foi decorado;
    // propertyKey = retorna o nome do método decorado;
    // descriptor = nos dará acesso ao método que desejamos modificar sua execução, através de descriptor.value.

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        // Recuperando a função original que foi marcada com o nosso decorator
        // descriptor.value retorna toda a execução da função marcada
        const metodoOriginal = descriptor.value;

        // aqui vamos substituir descriptor.value pela lógica do nosso decorator
        // 'sobreescrevendo' o método original que foi anotado com nosso decorator
        descriptor.value = function(...args: any[]) {

            let divisor: number = 1;
            let unidade: string = 'milesegundos';
            if(exibirEmSegundos){
                unidade = 'segundos';
                divisor = 1000;
            }

            console.log('-------------------------');
            console.log(`Parâmetros do método ${ propertyKey }: ${ JSON.stringify(args) }`);
            const timer1 = performance.now();

            // Fazemos metodoOriginal.apply(this, args),
            // para invocar o método original, capturar seu resultado, caso exista e retorná-lo.
            // (retorno de void sempre será undefined)
            const retorno = metodoOriginal.apply(this, args);
            console.log(`Retorno do método ${ propertyKey }: ${ JSON.stringify(retorno) }`);

            const timer2 = performance.now();
            console.log(`${ propertyKey } demorou ${ (timer2 - timer1) / divisor } ${ unidade }.`);
            console.log('-------------------------');

            return retorno;
        }

        return descriptor;
    }
}