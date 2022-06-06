// Exercicio 5
// Cria um array com 4 numeros a tua escolha
// Cria um array com 3 strings a tua escolha
// Cria um array com 2 boleanos true e false
// Cria um Objecto com a propriedade idade e valor 34
// Cria um array com 1 object que contem a propriadade idade e valor 34

/* Cria um array com 4 numeros a tua escolha */
// ✅ Correcto
var numeros = [10, 18, 30, 50];

console.log(numeros);

/* Cria um array com 3 strings a tua escolha */
// ✅ Correcto
var país = ["portugal", "itália", "inglaterra"];

console.log(país);

/* Cria um array com 2 boleanos true e false */
// ✅ Correcto MAS...
const resolucao_mais_simples = [true, false];

var array = [];
for (i = 0; i < 2; i++) {
  array[i] = i % 2 === 0;
}

console.log(resolucao_mais_simples);

/* Cria um Objecto com a propriedade idade e valor 34 */
// ✅ Correcto
const object = {
  idade: 34,
};

console.log(object);

/* Cria um array com 1 object que contem a propriadade idade e valor 34 */
// ❌
const array_com_objecto_idade_34 = [{ idade: 34 }];

var array = ["idade", 34];
// Nao podes redeclarar a variavel object pk ja declarast como const anteriorment
var object2 = {
  array: 34,
};
console.log(array_com_objecto_idade_34);

// Exercicio 6
// Cria uma função que verifica se um número fornecido é Impar ou não.
// Deve retornar true caso seja impar ou false caso não seja.

// Exercicio 7
// Cria uma função que receber 2 parametros e faz uma subtração do segundo ao primeiro.

// Exercicio 8
// Cria uma Função que recebe a idade de uma pessoa e diz se a pessoa é menor de idade ou adulta

// Exercicio 9
// faz um log na consola do 2 elemento do array
const PessoasIdades = [18, 34];

// Exercicio 10
// faz um log na consola da idade do 2 elemento do array
const Pessoas = [{ idade: 18 }, { idade: 34 }];

// Exercicio 11
// Cria uma função de receber um array e soma todos os elementos do array. exemplo
const SomaTodosOsElementosDesteArray = [1, 2, 3]; // deve retornar o numero 6

// Exercicio 12
// Cria uma função de recebe um numero e retorna a string Par ou Impar caso o numero seja par ou impar

// Exercicio 13
// Cria uma função que recebe uma idade que é um numero e retorna Jovem (se a idade for inferior a 18), Adulto (se for maior ou igual a 18 e menor que 65) e Sénior (se for maior que 65)
