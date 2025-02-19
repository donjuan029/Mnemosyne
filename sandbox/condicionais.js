// Exercicio 1

// let num = prompt("Digite um numero");

// console.log(num);

// if (num > 0) {

//     console.log("Positivo");

// } else if (num < 0) {

//     console.log("Negativo");
// } else {

//     console.log("E zero")

// }


//Exercicio 2

// let num2 = prompt("Digite um numero");

// console.log(num2);

// if (num2 % 2 === 0) {

//     console.log("Par");

// } else {

//     console.log("Impar")
    
// }

//Exercicio 3

// let idade = prompt("Digite sua idade: ");

// if (idade <= 12) {
//     console.log("Criança")
// }

// else if (idade >= 18) {
//     console.log("Adulto")
// }

// else {
//     console.log("Adolescente")
// }

//Exercicio 4 - O usuário insere a nota de um aluno (0 a 100).
//maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

// let nota = prompt("Digite sua nota");

// console.log(nota);

// if (nota >= 60) {

//     console.log("Aprovado");

// } else {

//     console.log("Reprovado")
    
// }

// Exercicio Int 2- O usuário insere três números.
//- Use `if-else` para determinar e exibir o maior.

// const numA = parseFloat(prompt("Digite um numero: "));
// const numB = parseFloat(prompt("Digite um numero: "));
// const numC = parseFloat(prompt("Digite um numero: "));

// let maior = numA

// if (numB > maior) {

//     maior = numB

// } if (numC > maior){

//     maior = numC
// }
// console.log({maior});

//Exercicio Int 3 3. **Desconto em compras:**
//compra for maior que R$ 100, aplique 10% de desconto.
//Caso contrário, exiba o valor normal.

// const valor = parseFloat(prompt("Digite o valor da compra"));

// console.log(valor);

// if (valor > 100) {

//     console.log(valor*0.9);

// } else {

//     console.log(valor)
    
// }


// 1. **Cálculo de IMC:**
// - Peça peso e altura.
// - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.


//Exercicio avancado 3

// const altura = parseFloat(prompt("Digite sua altura: "));
// const peso = parseFloat(prompt("Digite seu peso: "));

// imc = peso / (altura * altura);

// if (imc < 18.5) {
//     situacao = "Você está abaixo do peso ideal";
// } else if (imc <= 24.9) {
//     situacao = "Parabéns, você está em seu peso normal";
// } else if (imc <= 29.9) {
//     situacao = "Você está acima de seu peso (sobrepeso)";
// } else if (imc <= 34.9) {
//     situacao = "Obesidade grau I";
// } else if (imc <= 39.9) {
//     situacao = "Obesidade grau II";
// } else {
//     situacao = "Obesidade grau III";
// }

// // Exibe o valor do IMC e a situação na tela
// console.log("IMC: " + imc);
// console.log("Situação: " + situacao);

//Exercicio avancado 4

// let ano = prompt("Digite um ano");

// console.log(ano);

// if (ano % 4 === 0) {

//     console.log("Bissexto");

// } else if (ano % 400 === 0) {

//         console.log("Bissexto");
// }
//     else {
//     console.log("Nao e bissexto")
    
// }

//Exercicio avancado 2
//2. **Conversão de notas para conceitos:**
// - O usuário insere uma nota (0-100).
// - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// let nota = parseFloat(prompt("Digite uma nota"));

// if (nota >= 90 && nota <=100){
//     console.log("A")
// }

// else if (nota >= 80 && nota <=89){
//     console.log("B")
// }

// else if (nota >= 70 && nota <=79){
//     console.log("C")
// }

// else if (nota >= 60 && nota <=69){
//     console.log("D")
// }
// else if (nota <=60){
//     console.log("E")
// }

let num1 = parseFloat(prompt("Insira o primeiro numero: "));
let num2 = parseFloat(prompt("Insira outro numero: "));
let operacao = prompt("Insira a operacao. Ex: +, -, *, / . ");

switch (operacao) {
    case "+":

        let resultadoSoma = num1 + num2;
        console.log("resultado", resultadoSoma);

        break;

    case "-":

        let resultadoSubtracao = num1 - num2;
        console.log("resultado", resultadoSubtracao);

        break;

    case "*":

        let resultadoMultiplicacao = num1 * num2;
        console.log("resultado", resultadoMultiplicacao);

        break;

    case "/":

        if (num2 == 0) {
            console.log("Voce nao pode dividir um numero por zero");
        }    else {resultado = num1 / num2;
            console.log("resultado", resultado);
        }

        let resultadoDivisao = num1 / num2;
        console.log("resultado", resultadoDivisao);

        break;

    default:

    console.log("Operador Invalido")

}