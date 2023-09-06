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
uma vez declarado, fica preso nela e também tem que ser declarado antes e ser utilizada. 

var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
*/

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

// existem ainda mais dois tipos de variáveis: null e undefined.
// null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
// null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
let input = null;
let input2;
console.log(input); // null
console.log(input2); // undefined
// undefined também é o valor retornado por uma função que não tem cláusula return. Veremos mais sobre funções e return mais adiante no curso.

// CONVERSÃO IMPLÍCITA
// O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
const dezAnosDepois2=12;
//Mesmo sem definir que um numero sem aspas é um numero(Number), automaticamente ele é definido como um
const sobrenome2="Ayumi";
const dezAnosDepois3="12";
//Já no caso de um numero estar entre aspas, ele é definido como uma string automaticamente

//CONVERSÃO EXPLÍCITA
// Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.
//Number() Define como numero
//String() Define como uma string
const dezAnosDepois4=Number("12");
//já neste caso estou deixando EXPLÍCITO(indicando) que mesmo dentro de aspas a variável é do tipo NUMBER
const dezAnosDepois5=Number("12a");
//Neste caso ao usar esta variável para calculo, exibiria NaN(not a Number), pois contém uma LETRA junto do numero
