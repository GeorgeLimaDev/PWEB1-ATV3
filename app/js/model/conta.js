class Conta {
    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(novoNumero) {
        this._numero = novoNumero;
    }
    get saldo() {
        return this._saldo;
    }
    debitar(valor) {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
    toString() {
        return `Núm. da conta: ${this._numero} - Saldo: ${this._saldo}`;
    }
}
