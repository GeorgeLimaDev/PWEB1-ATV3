class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    listar() {
        return this.clientes;
    }
    remover(conta) {
        const clienteARemover = this.pesquisar(conta);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                console.log(`Cliente removido: ${clienteARemover.nome}`);
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(numero) {
        return this.clientes.find(cliente => cliente.cpf === numero);
    }
    toString() {
        let saida = '';
        this.clientes.forEach(cliente => {
            saida += cliente.toString();
        });
        return saida;
    }
    ;
}
