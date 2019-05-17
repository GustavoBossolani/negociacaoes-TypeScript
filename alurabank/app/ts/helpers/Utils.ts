import { Imprimivel } from "../models/Interfaces/Imprimivel";

// Classe responsável por exportar todos os métodos de auxilio


export function imprime(...objeto: Imprimivel[]) {
    objeto.forEach(objeto => objeto.paraTexto());
}