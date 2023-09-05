// Formas de se declarar uma variável no JavaScript
var variavel; 
/* VAR Foi a primeira forma de se declarar, mas não é mais indicado seu uso(mas funciona), pois pode causar alguns Bugs indesejados,
 pois a variável pode ser usada mesmo antes(seguindo a sequência de linhas do codigo) de ser declarada
 (pg o arquivo .JS é lido como um todo para depois ser executado)e o VAR pode ser usado fora do {escopo} do codigo */
let variavel2;
/* a LET, que pode ser declarada sem atribuir um valor para ela e que nos permite trocar os valores dela, porém, 
nós sempre temos que declarar ela antes de ser utilizada;  */
const variavel3=1;
/* CONST, que precisa ter um valor atribuido para ser declarada e que é "fixo", o valor dela, 
uma vez declarado, fica preso nela e também tem que ser declarado antes e ser utilizada. */

// Váriaveis do tipo PRIMTIVO
var num0=0.3;
let num1=1;
const num2=2;
let soma = num1 + num2;
// console.log(soma);
const divisao = 10/3;
// console.log(divisao);
const strings = "Olá! Mundo";
const strings2 = 'Olá! Mundo "Oi!"';
// console.log(strings2);
// Concatenação de strings
// console.log(strings2 + strings);

// Template string ou Template Literal (Material sobre abaixo)
// https://www.devmedia.com.br/javascript-template-literals/41193
// https://www.w3schools.com/js/js_string_templates.asp
const strings3 = `texto com quebra
de linha e interpolação!`;
// A substituição automática de variáveis ​​por valores reais é chamada de interpolação de strings .

// Váriaveis boleanas, true(1)(truthy)  or false(0)(falsy) (verdadeiro ou falso)
console.log(0 == false); //Exibi true
console.log("" == false); //Exibi true
console.log(1 == true); //Exibi true
let minhaVar;
console.log(minhaVar); //Exibi undefined(variável não definida)
console.log(typeof minhaVar); //Exibi undefined(variável não definida)
let varNull=null;
console.log(varNull); //Exibi null
console.log(typeof varNull); /*Exibi object(variável do tipo objeto)(foi um erro na de definição da própria linguage,
 que até hoje não foi por questões de compatibilidade com os codigos já em uso)*/
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

// existem ainda mais dois tipos de variáveis: null e undefined.
let input = null;
let input2;
console.log(input); // null
console.log(input2); // undefined
// undefined também é o valor retornado por uma função que não tem cláusula return. Veremos mais sobre funções e return mais adiante no curso.

// CONVERSÃO IMPLÍCITA
const dezAnosDepois2=12;
//Mesmo sem definir que um numero sem aspas é um numero(Number), automaticamente ele é definido como um
const sobrenome2="Ayumi";
const dezAnosDepois3="12";
//Já no caso de um numero estar entre aspas, ele é definido como uma string automaticamente

//CONVERSÃO EXPLÍCITA
//Number() Define como numero
//String() Define como uma string
const dezAnosDepois4=Number("12");
//já neste caso estou deixando EXPLÍCITO(indicando) que mesmo dentro de aspas a variável é do tipo NUMBER
const dezAnosDepois5=Number("12a");
//Neste caso ao usar esta variável para calculo, exibiria NaN(not a Number), pois contém uma LETRA junto do numero


// Um pouco sobre funções visto no material extra das aulas
// Math.round(), retorna o valor de um número arredondado para o inteiro mais próximo.
// var aredondar = Math.round(divisao);
// console.log(aredondar);

// Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamos: toFixed(2)
// var aredondar2 = divisao.toFixed(2);
// console.log(aredondar2);

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi);