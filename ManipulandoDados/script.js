// Transformando String em Números e Números em Strings
let string = '89'
let numero = 54
console.log(Number(string), String(numero))

//Contar quantas caracteres tem uma palavra e quantos dígitos tem um número

let caracteres = 'Rato roeu a roupa do rei de roma'
console.log(caracteres.length)

let digitos = 456

console.log(String(digitos).length)

// transformar um número quebrado com 2 casas decimais  e trocar ponto por vírgula
let num = 23.5432

console.log(num.toFixed(2).replace('.', ','))

//Transforme letras maiusculas em minusculas, faça o contrário também

let palavra = 'My name is Pedro Ygor'
let upperCase = 'HUMILDE'
console.log(palavra.toUpperCase(palavra))
console.log(upperCase.toLowerCase(upperCase))

/* 
    Separa um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
    Depois, transforme o array em um texto e onde eram espaços coloque _
*/

let texto =
  'Meu nome é Pedro Ygor tenho 25 anos, moro em Banabuiú e meu sonho é arrumar um emprego programando javascript'
let arr = texto.split(' ')
console.log(arr)
console.log(arr.join('_'))
