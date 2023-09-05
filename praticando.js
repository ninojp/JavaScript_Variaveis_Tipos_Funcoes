
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

// Vamos calcular a área de um retângulo
let larguraRet = "10";
let alturaRet = "5";
// console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
console.log(String(larguraRet) * String(alturaRet));

let largura2 = "10";
let altura2 = "5";
console.log( + largura2 * + altura2); // teremos a conversão de String para números realizado usando o + antes das variáveis


// EU TESTANDO ALGUMAS COISAS PRA TENTAR ENTENDER
// function declaraVariavel(respostaDeTudo, idade, pi){
    // var respostaDeTudo = 3.14
    // var respostaDeTudo;
    // let idade = 42
    // let idade;
    // var idade;
    // const pi = 29;
    // var pi;
    // console.log(respostaDeTudo, idade, pi);
// }
// console.log(respostaDeTudo, idade, pi);
// console.log(respostaDeTudo);
// declaraVariavel(3.14, 43, 39);