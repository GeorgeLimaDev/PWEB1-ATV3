class ClienteEspecial extends Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;
    private dependentes: Array<Cliente>;

    constructor(_nome: string, _cpf: string, _conta: Conta) {
        super(_nome, _cpf);
        this.dependentes = new Array<Cliente>();
    }

}