class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(novaConta) {
        this._conta = novaConta;
    }
    toString() {
        return this._nome + ' ' + this._cpf + ' ' + this._conta;
    }
}
