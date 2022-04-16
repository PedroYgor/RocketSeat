/* 
  Crie um exercício que transforme as notas do sistema numérico para sistema de notas em caracteres 
  tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B 
    * entre 70 - 79   - C 
    * entre 60 - 69   - D 
    * menor que 60    - F 
*/

function transformaNota (nota) {
  if(nota > 100 || nota < 0 || typeof nota !== Number){
    return "Nota Inválida";
  }
  else if (nota < 60) return "F"
  else if (nota <= 69) return "D"
  else if (nota <= 79) return "C"
  else if (nota <= 89) return "B"
  else return "A"
  
}

console.log(transformaNota(100));


/* 
  ### Sistema de gastos familiar
  
  
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  
      * receitas: []
      * despesas: []
   
  Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar
  uma mensagem se a família está com saldo positivo ou negativo seguido do valor do saldo.  
  
*/

let gastoFamiliar = {
  receitas: [1200, 1200, 250.43, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450, 2000],

  saldo: () => {
    let receita = 0;
    let despesa = 0;
    function soma(array) {
      let total = 0;
      for (const iterator of array) {
        total += iterator;
      }
      return total;
    }
    receita = soma(gastoFamiliar.receitas);
    despesa = soma(gastoFamiliar.despesas);

    let valor = (receita - despesa).toFixed(2);

    return valor >= 0 ? `Saldo positivo ${valor}` : `Saldo negativo ${valor}`;
    
  }
}

// gastoFamiliar.receitas.push(300);
// gastoFamiliar.receitas.push(300);
// gastoFamiliar.receitas.push(300);
// gastoFamiliar.despesas.push(300);
// gastoFamiliar.despesas.push(300);
// gastoFamiliar.despesas.push(301);
let saldo = gastoFamiliar.saldo();
console.log(saldo);



/* 
  ### Celsius em Farenheit

  Crie uma função que receba uma string em celsius ou fahrenheit 
  e faça a transformação de uma unidade para outra 

*/


function converteGraus(graus) {
  let aux = parseFloat(graus)
  let total = 0;
  if (graus.toLowerCase().includes("c")){
    total = aux * 9/5 + 32;
    return `Valor em Fahrenheit é: ${total.toFixed(2)} F`;
  } 
  else if (graus.toLowerCase().includes("f")){
    total = (aux - 32) * 5/9
    return `Valor em Celsius é: ${total.toFixed(2)} C`;
  } 
  else {
    throw new Error('Valor não identificado')
    
  }
}

console.log(converteGraus("10 C"))
console.log(converteGraus("50 F"))