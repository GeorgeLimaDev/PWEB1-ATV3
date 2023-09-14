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

let novaConta = new Conta('111', 5000);
let novoCliente = new Cliente('George', '123456789');
clientes.inserir(novoCliente);
console.log(clientes.listar());
