class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array;
    }
    inserirDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const dependenteARemover = this.pesquisarDependente(cpf);
        if (dependenteARemover) {
            const indiceCliente = this.dependentes.indexOf(dependenteARemover);
            if (indiceCliente > -1) {
                console.log(`Dependente removido: ${dependenteARemover.nome}`);
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisarDependente(cpf) {
        return this.dependentes.find(cliente => cliente.cpf === cpf);
    }
    listarDependentes() {
        return this.dependentes;
    }
    toString() {
        let saida = '';
        this.dependentes.forEach(dependente => {
            saida += dependente.toString();
        });
        return saida;
    }
    ;
}
