// variáveis
let variavel_local = 10; // number
const constante = []; // array
const objeto = {}; // objeto
const msg = "Texto"; // string
let status = false; // bool

console.log(1 == "1"); // true (compara valores, não tipos)
console.log(1 === '1'); // false (compara valor e tipo)

// funções
function soma(a, b) {
    return a + b;
}

let resultado = soma(1, 2); // 3
const multiplica = (a, b) => a * b;

resultado = multiplica(1, 2); // 2

/* Função comentada (não usada no código final)
function multiplica(a, b) {
    return a * b;
}
*/

async function tempo(duracao) {
    await new Promise((r) => {
        setTimeout(r, duracao); // Corrigido para setTimeout em vez de setInterval
    });
    console.log("Yrvin guei");
}

tempo(3000);

// objetos
const pessoa = { nome: "Jose", email: "jose@ies.br", fone: "8888-888" };
console.log(pessoa.nome); // "Jose"

// Não é possível reatribuir um objeto declarado com const
// A linha abaixo está incorreta. Para alterar valores, modifique as propriedades do objeto diretamente
// pessoa = "Jose Reginaldo"; // ERRO!

// Desestruturação de objetos
const { nome } = pessoa;
console.log(nome); // "Jose"

// espalhamento (propagação) de objetos
const pessoa_fisica = { cpf: 111, ...pessoa }; 
console.log(pessoa_fisica); // { cpf: 111, nome: "Jose", email: "jose@ies.br", fone: "8888-888" }

// array e busca
const lista = [];
lista.push("uva");
const achou = lista.find((item) => item == "uva");
console.log(achou); // "uva"

// Laço de repetição
for (let i = 0; i < lista.length; i++) {  // 'int' não existe em JavaScript, o correto é 'let'
    if (lista[i] === "uva") {
        console.log("Achou a uva!");  // Exemplo de ação ao encontrar o item
    }
}

// modulos (não está implementado no código)


export {soma, multiplica}