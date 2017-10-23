export class Dobra {
    nome: string;
    descricao: string;
    dobraId?: number;

    constructor(nome: string, descricao: string, dobraId?: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.dobraId = dobraId;
    }
}