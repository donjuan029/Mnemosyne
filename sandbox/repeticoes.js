
function exercicioRep01 () {
for (let contador = 1; contador <= 5; contador++) {
    console.log("Contagem: ", contador);
    }

    let divDeLogs = document.querySelector(".logs"); //Busca um elemento da tela.

    let paragrafo = document.createElement("p");

    paragrafo.innerHTML = "Exercicio 01 de repeticao executado.";

    divDeLogs.appendChild(paragrafo);
}

function exercicioRep02 () {
for (let contador = 1; contador <=10; contador++) {
    console.log("Contagem: ", contador)
    }
}

// let contador = 1;
// while (contador <=5) {

//     console.log("Contagem: ", contador);
//     contador++;
// }

// let mensagem = ""
// do {
//     console.log("")
// }


// exercicio 2 tabuada

function exercicioRep03 () {
let num = prompt("Insira um numero: ");

for (let contador = 1; contador <=10; contador++) {

    let valorCaculado = num * contador;

    let mensagem = `${num} x ${contador} = ${valorCaculado}`

    console.log(mensagem);
    }
}

// Exercicio 3

// let num = parseInt(prompt("Insira um numero: "));

// for (let contador = 1; contador = num; num++); {
//     console.log("Contagem: ", num);
// }

// Exercicio Int 1

// let contador = 2; 

// while (contador <= 50) {
//     console.log(contador);
//     contador += 2;
// }

// Exercicio Int 2

// let numeroAleatorio = Math.floor(Math.random() * 100);

// let chute = null;

// while (chute != numeroAleatorio) {

//     chute = parseInt(prompt("Chute um número:"));

//     if (chute != numeroAleatorio) {

//         if (chute > numeroAleatorio) {
    
//             alert("Chutou alto.");
    
//         } else {
    
//             alert("Chutou baixo.");
    
//         }

//     }

// }

// alert("Você acertou!");

// Exercicio Int 3

// let num = parseInt(prompt("Insira um numero maior que 0: "));

// while (num > 0) {

//     console.log("Contagem: ", num);
//      num--;
// }
