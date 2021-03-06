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

ou;

const boleanos = [true, false];
console.log(boleanos);

/* Cria um Objecto com a propriedade idade e valor 34 */
// ✅ Correcto
const object = {
  idade: 34,
};

console.log(object);

/* Cria um array com 1 object que contem a propriadade idade e valor 34 */
// ❌
const obj_idade = [{ idade: 34 }];
var array = ["idade", 34];
var object2 = {
  array: 34,
};
console.log(obj_idade[0].idade);

// Exercicio 6
// Cria uma função que verifica se um número fornecido é Impar ou não.
// Deve retornar true caso seja impar ou false caso não seja.
// Documentação adicional https://www.w3schools.com/jsref/jsref_operators.asp

// ✅ Correcto
function impar(numero) {
  if (numero % 2 === 0) {
    return false;
  }
  return true;
}

// Outras possiveis resoluções

function isImpar_(numero) {
  // Podemos inverter o operador e retornar logo
  if (numero % 2 !== 0) {
    return true;
  }

  return false;
}

function _isImpar_(numero) {
  // O Javascript permite criares um if statment sem chavetas desde que tenha apenas uma linha a seguir
  if (numero % 2 !== 0) return true;

  return false;
}

function isImpar(numero) {
  // Operação Trenário
  // variablename = (condition) ? value1:value2
  // Example:
  // const voteable = (age < 18) ? "Too young":"Old enough";
  return numero % 2 === 0 ? false : true;
}

function _isImpar(numero) {
  // Podemos retornar o resultado directamente da operação matematica (numero % 2 !== 0)
  // Nos aqui invertemos o operador.
  /*
    Imagina que x é igual a 5
    x = 5

    ===	  equal value and equal type	  x === "5"	  false	
                                        x === 5	    true

    !==	  not equal value or not equal type	  x !== "5"	  true	
                                              x !== 5	    false

    ==	  equal to	    x == 8	false	
                        x == 5	true
    !=	  not equal	    x != 8	true
  */
  return numero % 2 !== 0;
}

var input = 31;
var result = impar(input);

console.log(result);

// Exercicio 7
// Cria uma função que receber 2 parametros e faz uma subtração do segundo ao primeiro.

function subtraccao(p1, p2) {
  return p2 - p1;
}
let x = subtraccao(3, 2);
console.log(x);

// Exercicio 8
// Cria uma Função que recebe a idade de uma pessoa e diz se a pessoa é menor de idade ou adulta

function age(idade) {
  if (idade >= 18) return "adulto";
  return "menor";
}
var input = 18;
var result = age(input);
console.log(result);

// Exercicio 9
// faz um log na consola do 2 elemento do array

const PessoasIdades = [18, 34];
console.log(PessoasIdades[1]);

// Exercicio 10
// faz um log na consola da idade do 2 elemento do array

const Pessoas = [{ idade: 18 }, { idade: 34 }];
console.log(Pessoas[1].idade);

// Exercicio 11
// Cria uma função de receber um array e soma todos os elementos do array. exemplo
const SomaTodosOsElementosDesteArray = [1, 2, 3]; // deve retornar o numero 6

function soma(arr) {
  let sum = 0;
  if (typeof arr !== "object") return null;
  console.log(typeof arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(soma(SomaTodosOsElementosDesteArray));

// Exercicio 12
// Cria uma função de recebe um numero e retorna a string Par ou Impar caso o numero seja par ou impar
function par_impar(numero) {
  if (typeof numero === "string") return null;
  console.log(typeof numero);

  if (numero % 2 === 0) {
    return "par";
  }
  return "impar";
}
var input = 10;
var result = par_impar(input);

console.log(result);

// Exercicio 13
// Cria uma função que recebe uma idade que é um numero e retorna Jovem (se a idade for inferior a 18), Adulto (se for maior ou igual a 18 e menor que 65) e Sénior (se for maior que 65)

function recebeIdade(num) {
  if (num < 18) {
    return "jovem";
  } else if (num > 18 && num < 65) {
    return "adulto";
  } else if (num > 65) {
    return "senior";
  }
}

console.log(recebeIdade(17));

// Exercicio 14
// Cria uma função que recebe 2 argumentos nome e idade exemplo
// pessoa("ricardo", 34)
// e tem de devolver um objecto com as propriedades {nome: "ricardo", idade: 34}

function pessoa(nome, idade, sexo) {
  let name = nome;
  let age = idade;

  return {
    nome: name,
    idade: age,
  };
}

console.log(pessoa("ricardo", 34));

// Exercicio 15
// Cria uma função que recebe um array objecto { dia: 20, mes: 8, ano: 1980 }
// e deve retornar a String "20 de Agosto de 1980"

function arrayObj({ dia, mes, ano }) {
  return `${dia} de ${mes} de ${ano}`;
}
let object = {
  dia: 20,
  mes: "Agosto",
  ano: 1980,
};

console.log(arrayObj(object));

// Exercicio 16
// Cria uma função que recebe uma String exemplo "hello"
// e deve retornar a string invertida exemplo "olleh"

// Exercicio 16
// Cria uma função que recebe uma String exemplo "hello"
// e deve retornar a string invertida exemplo "olleh"

function reverseString(str) {
  let novaString = str.split("");
  let reverseArray = novaString.reverse("");
  let arrayToString = reverseArray.join("");
  return arrayToString;
}

console.log(reverseString("hello"));

//ou

function reverseString(str) {
  let novaString = str.split("");
  console.log(novaString);
  let reverseString = novaString.reverse("");
  console.log(reverseString);
  for (let i = reverseString - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString.join("");
}
console.log(reverseString("hello"));

// ou

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// ou

function reverseString(str) {
  let reverseString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
console.log(reverseString("hello"));

// Exercicio 17
/* function meuNome() {
  return "Nome do utilizador";
} */

function meuNome() {
  return "Nome do utilizador";
}

function funcaoAnterior(funcao) {
  console.log(funcao());
}

funcaoAnterior(meuNome);
// Cria uma função que recebe como argumento a função anteiror "meuNome" e faz console log do resultado dentro da função criada por ti

// Exercidio 18
// Cria uma função que recebe um array no primeiro elemento e no segundo elemento uma função e deve retornar um array filtrado de acordo com a função passada Exemplo:
// function filter(array, func)
// ao involcares a funcao filter com um array e com a tua função impar, deve ser retornado um array novo com os impars
// filter([0,1,2,3,5], impar) -> devolve [1,3,5]


function impar(numero) {
  if (numero %2 === 0) {
    return false
  }
  return true;
}


function filter([1,2,3,4,5], impar) {
  for (let i = 0; i < array.length; i++) {
    console.log(func(array[i])) {
      newArray.push(array[i])
    }
    return newArray
  }

}

filter([1,2,3,4,5], impar);

ou

function impar(numero) {
  if (numero % 2 === 0) {
    return false;
  }
  return true;
}

function getOddFromArray(array, func) {
  return array.filter(value => {
    if(func(value)) {
      return value
    }
  });
}

getOddFromArray([1,2,3,4,5], impar);