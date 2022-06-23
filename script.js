// Crie um array que receba 5 itens e exiba no console.

let itens = ["Olá", "Desafio", 05, "de", "array"]
console.log(itens)
// Utilize um método para adicionar um nome ao inicio do array.

let compras = ["batata", "feijao", "arroz", "carne"]
compras.unshift("Macarrão")
console.log(compras)

// Utilize um método para remover o último nome do array.

let dias = ["Segunda", "Terça", "Quarta", "Quinta", "sexta", "sabado"]
dias.pop()
console.log(dias)

// Utilize um método para adicionar dois nomes ao fim do array.

let cachorros = ["Buldogue", "labrador", "pastor-alemao", "poodle"]
cachorros.push("golden", "chihuahua")
console.log(cachorros)

// Utilize um método para remover o primeiro nome do array.

let nomes = ["Miguel", "Arthur ", "Gael", "Heitor"]
nomes.shift()
console.log(nomes)

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return(a-b)
})

console.log(numbers)