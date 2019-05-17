import { View } from './View';

export class MensagemView extends View<string>{

    
    template(model: string, classeBootstrap?: string): string {

        let bootstrapClass: string;

        if (classeBootstrap == undefined) {
            bootstrapClass = `alert-info`;
        } else {
            bootstrapClass = classeBootstrap;
        }
        return `<p class="alert ${bootstrapClass}">${model}</p>`;
    }
}