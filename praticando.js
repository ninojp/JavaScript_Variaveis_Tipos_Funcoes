/*
//Exercício sobre TIPOS de variáveis
const idade = 2;
console.log(typeof idade); //Exibi number(variável do tipo numero)
const idade2 = 12;
const nome="Lara";
console.log(typeof nome); //Exibi string(variável do tipo string)
const nome2="lara";
const sobrenome="Ayumi";
const bacharel=false;
const dezAnosDepois="12";
const nomeCompleto = nome +" "+ sobrenome;
const resultado = idade + dezAnosDepois;
console.log(nomeCompleto); //Exibi a concatenação dos nomes pois são strings
// console.log(resultado); // Exibi 212
// [=] simbolo de ATRIBUIÇÃO, [==] IGUALDADE, [===]IDÊNTICO valor e tipo
console.log(idade2 == dezAnosDepois); //Exibi TRUE, pois == compara o VALOR não o TIPO da váriavel
console.log(idade2 === dezAnosDepois); //Exibi FALSE, pois === compara o VALOR e o TIPO
console.log(nome == nome2); //Exibi FALSE, pois o JavaScript é case-sensitive(sensível a maiúsculas e minúsculas)
console.log(bacharel == 1);//Exibi FALSE, pois 1 é igual a TRUE e FALSE igual a 0(bacharel, no caso).

//Exercício sobre declarar as variáveis com VAR, LET, CONST
// const pi = 29; //CONST, precisa ser declarada fora do SCOPO para ser utilizada fora e precisa de um valor atribuido 
// let idadeHomen = 42; //LET, precisa ser declarada fora do SCOPO para ser utilizada fora
{
    var respostaDeTudo = 3.14
    let idadeHomen = 42
    const pi = 29;
    console.log(respostaDeTudo, idadeHomen, pi);
}
console.log(respostaDeTudo);
// console.log(respostaDeTudo, idadeHomen, pi); //ERRO pois LET nõa pode ser usada foro do scopo da função
// let idadeHomen = 42

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); 

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
console.log(usuarioConectado);
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura1 = "10";
let altura1 = "5";
console.log(Number(largura1) * Number(altura1)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

// TESTE, Vamos calcular a área de um retângulo
let larguraRet = "10";
let alturaRet = "5";
console.log(String(larguraRet) * String(alturaRet));
console.log(typeof larguraRet);

let largura2 = 10;
let altura2 = "5";
console.log( + largura2 * + altura2); // teremos a conversão de String para números realizado usando o + antes das variáveis
console.log(typeof largura2);


let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// LISTA de palavras reservadas do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.
// https://cursos.alura.com.br/course/fundamentos-javascript-tipos-variaveis-funcoes/task/94132
// Exemplos
// let var = 0;
// let if = 0;
// let const = "Alura";

let minhaLet;
const minhaConst=10;
console.log(minhaLet); //undefined
console.log(minhaConst); 

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
// const minhaConst="outro Valor"; //Não posso atribuir outro valor a um constante
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100


minhaLet = 100;
console.log("deu erro");
console.error("deu erro");

console.log("deu erro");
console.error(new Error("deu erro"));
*/

//Exemplo do Palindromo

function palavraPalindroma(){
    let palavra = "radar";
    let palavraDividida = palavra.split();
    let palavraJoin = palavraDividida.reverse();
    let palavraInvertida = palavraJoin.join();
    if(palavra === palavraInvertida){
        console.log(`Esta palavra ${palavra} é um palindromo`);
    }else{
        console.log("Esta palavra NÃO é um palindromo");
    }
}









