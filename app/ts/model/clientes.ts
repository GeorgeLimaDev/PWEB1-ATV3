class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }

    remover(conta: string) {
        const clienteARemover = this.pesquisar(conta);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                console.log(`Cliente removido: ${clienteARemover.nome}`);
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(numero: string): Cliente {
        return this.clientes.find(cliente => cliente.cpf === numero);
    }

    toString(): string {
        let saida = '';
        this.clientes.forEach(cliente => {
            saida += cliente.toString();
        })
        return saida;
        };

}