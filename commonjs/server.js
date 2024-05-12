const operations = require('./operation');
const funcoes = require('./funcoes');
const funcoes2 = require('./funcoes2');

console.log(operations.var1);
console.log(operations.var2);

const resultado = funcoes(1);
console.log(resultado.msg, resultado.value);


const add = funcoes2.adicao(5,7);
const sub = funcoes2.subtracao(7,3);

console.log(add,sub);

