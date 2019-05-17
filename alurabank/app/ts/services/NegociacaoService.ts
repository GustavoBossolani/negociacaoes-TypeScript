import { Negociacao } from '../models/index';
import { NegociacaoParcial } from '../models/Interfaces/index';

export class NegociacaoService {

    //É preciso realiza essa sutil mudança no retorno pois houve mudanças na linguagem
    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(resposta => handler(resposta))
            .then(resposta => resposta.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err);
                throw new Error("Não foi possível importar as Negociações");
            });
    }
}

/*
    A interface ResponseHandler é o tipo que define que a função deve receber um parâmetro do tipo Response e devolver um Response.
    Inclusive, lá no método obterNegociacoes mudamos o tipo de Function para ResponseHandler.

    Agora, em NegociacaoController, nosso código não compila com a função indevida que passarmos e somos alertados disso através do compilador do TypeScript.
    Se passarmos novamente isOk na classe NegociacaoControler, tudo continuará funcionando, pois isOk segue a assinatura da interface.
*/
export interface ResponseHandler {
    (res: Response): Response;
}