import { Binary } from 'selenium-webdriver/firefox';

export interface ListaUsuariosModel {
    usuario: string;
    email: string;
    foto: Binary[];
    nome: string;
    apelido:string;
    sequencial: number;
}

