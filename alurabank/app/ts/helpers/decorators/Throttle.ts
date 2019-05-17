export function throttle(milesegundos: number = 500) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        /*
            É necessário criar a variável timer fora do escopo de sobrescrita do descriptor,
            pois cada chamada ou clique no botão de incluir ou importar, uma nova variável de tempo é criada
            e após o carregamento desta variável definida em milesegundos, será executado o comando do método
            de acordo com a quantidade de eventos enviados e organizados em fila.
        */
        let timer = 0;


        // a sobrescrita do descriptor é acionada a cada clique no botão (a cada chama de um evento)
        descriptor.value = function (...args: any[]) {
            console.log(`executando a sobescrita do descriptor na função: ${propertyKey}, timer: ${timer}`);
            if (event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milesegundos);
        }
        return descriptor;
    }
}
