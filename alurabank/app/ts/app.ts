import { NegociacaoController } from './controllers/index';

const negociacaoController = new NegociacaoController();

//Implementação antiga sem usar JQuery
// document
//     .querySelector('.form')
//     .addEventListener('submit', negociacaoController.adciona.bind(negociacaoController));

//Implementação ocm JQuery
$('.form').submit(negociacaoController.adciona.bind(negociacaoController));
$('#botao-importar').click(negociacaoController.importar.bind(negociacaoController));