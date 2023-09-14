class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    inserirDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(conta) {
        const dependenteARemover = this.pesquisarDependente(conta);
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
}
