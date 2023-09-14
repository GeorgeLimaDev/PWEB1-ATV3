let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let clientes = new Clientes();


//Manipulando a classe Clientes:
//Inserir:
let novoCliente = new Cliente('George', '123456789', new Conta("111", 5000));
let novoCliente2 = new Cliente('Amanda', '123456000', new Conta("222", 1000000));
let novoCliente3 = new Cliente('Ianzin', '123456111', new Conta("333", 5000));
clientes.inserir(novoCliente);
clientes.inserir(novoCliente2);
clientes.inserir(novoCliente3);
//Listar (utilizando um método toString para melhor visualização):
console.log(clientes.toString());
//Pesquisar:
console.log(clientes.pesquisar('123456789'));
//Remover (utilizando CPF como chave):
clientes.remover('123456111');
//Confirmando a remoção:
console.log(clientes.toString());

//Testando cliente Especial:
let clienteEspecial = new ClienteEspecial('Gabrielly', '123123123', new Conta('888', 7500));
console.log(clienteEspecial.toString());
//Inserindo e exibindo um dependente:
clienteEspecial.inserirDependente(new Cliente('Pedro', '789675456', new Conta('999')));
console.log(clienteEspecial.listarDependentes());