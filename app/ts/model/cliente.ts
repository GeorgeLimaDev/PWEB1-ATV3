class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome:string, cpf:string) {
        this.nome = nome;
        this._cpf = cpf;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) { 
        this._nome = novoNome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(novoCpf: string) { 
        this._cpf = novoCpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(novaConta: Conta) {
        this._conta = novaConta;
    }

    toString(): string {
        return this._nome + ' ' + this._cpf + ' ' + this._conta;
    }

}