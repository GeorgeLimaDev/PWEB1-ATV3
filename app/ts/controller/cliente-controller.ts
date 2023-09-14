class clienteController {
    private nomeElement: HTMLInputElement;
    private cpfElement: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.nomeElement = <HTMLInputElement> document.querySelector('#nome');
        this.cpfElement = <HTMLInputElement> document.querySelector('#cpf');
        this.clientes = new Clientes();
    }

    inserir (evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente (this.nomeElement.value, this.cpfElement.value);

        this.clientes.inserir(novoCliente);

        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}