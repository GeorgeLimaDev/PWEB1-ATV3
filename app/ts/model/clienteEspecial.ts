class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
    }

    inserirDependente (dependente: Cliente) {
        this.dependentes.push(dependente);
    }

    removerDependente (conta: string) {
        const dependenteARemover = this.pesquisarDependente(conta);
        if (dependenteARemover) {
            const indiceCliente = this.dependentes.indexOf(dependenteARemover);
            if (indiceCliente > -1) {
                console.log(`Dependente removido: ${dependenteARemover.nome}`);
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisarDependente (cpf: string): Cliente {
        return this.dependentes.find(cliente => cliente.cpf === cpf);
    }

    listarDependentes() {
        return this.dependentes;
    }
}
