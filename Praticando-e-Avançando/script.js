// 1. Declare uma Váriável de nome weight
var weight

// 2. Que tipo de dado é a variável acima]
console.log(typeof weight)

/* 
    3. Declare uma variável e atribya valores para cada um dos dados: 
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let nome = 'Pedro'
let age = 24
let stars = 8.8
let isSubscribed = true

console.log(nome, age, stars, isSubscribed)

/* 
    4. A variável Student é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    
    4.2 Mostre no console a seguinte mensagem: 

    <name> de idade <age> pesa <weigth> kg.
*/

let student = {
  name: nome,
  age: age,
  stars: stars,
  isSubscribed: isSubscribed,
  weight: 60
}

console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 
    5. Declare uma variável de tipo array, de nome students e atribua 
    a ela nenhum valor, ou seja, somente o array vazio 
*/

let students = []

/* 
    6. Reatribua valor para variável acima, colocando
    dentro dela o objeto setudent da questão 4.
    (Não copiar e colar o objeto, mas usar o objeto criado e 
        inserir ele no array )
*/

students.push(student)
console.log(students)

/* 
    7. Coloque no console o valor da posição zero do Array Acima
*/

console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const studentNew = {
  name: 'Ygor',
  age: 21,
  stars: 9,
  isSubscribed: true,
  weight: 80.0
}

students.push(studentNew)

console.log(students)
