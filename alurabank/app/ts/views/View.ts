import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {

    // private _elemento: Element; antigo atributo usado antes do JQuery
    private _elemento: JQuery;

    //Essa variável _escape reflete a uma técnica para limpar nosso template de HTML.
    //Ex: tags <script> implementadas em nosso template são removidas caso o desenvolvedor deseje
    private _escape: boolean;

    constructor(seletor: string, escape?: boolean) {
        // this._elemento = document.querySelector(seletor); antigo seletor usando antes do JQuery
        this._elemento = $(seletor); //usando JQuery

        //Fazendo a verificação para que o _escape não receba undefined ou null e não seja 'pego' pelo strickNullChecks
        if (escape == undefined) {
            escape = false;
        }
        this._escape = escape
    }

    //@logarTempoDeExecucao()
    update(model: T, classeBootstrapAlert?: string): void {
        let template: string;
        if (classeBootstrapAlert == undefined) {
            template = this.template(model);
        } else {
            template = this.template(model, classeBootstrapAlert);
        }


        if (this._escape) {
            //Aqui estamos realizando a tecnica de escape e retirando todas as tags string de dentro do template
            template = template.replace('/<script>[\s\S]*?</script>/', this.template(model));
        }

        // this._elemento.innerHTML = this.template(model); usando o innerHTML sem o JQuery
        this._elemento.html(template); //Usando o innerHTML com JQuery
    }
    abstract template(model: T, classeBootstrap?: string): string;
}