import { Imprimivel,Igualavel } from "./index";

export interface IndexInterface<T> extends Igualavel<T>, Imprimivel{}