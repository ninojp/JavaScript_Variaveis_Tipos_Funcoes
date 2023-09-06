
let idadeClient=17;
const idadeAdulta=18;
// Forma tradicional de escrever uma condicional. (a função eu criei apenas para praticar) 
function verificarIdade(){
    if(idadeClient >= idadeAdulta){
        // let idade = "Adulto!";
        var idade = "Adulto!";
        // console.log(idade);

    }else{
        // let idade="Menor de Idade!";
        var idade="Menor de Idade!";
        // console.log(idade);
    }
    console.log(idade);
}
verificarIdade();
// console.log(idade);
//OPERADOR TERNÁRIO
// O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
console.log(idadeClient >= idadeAdulta ? "Adulto!" : "Menor de Idade!");
//--------------------------------------------------------------------------------------------------------------------------------

let dataAtual = Date();
console.log(dataAtual);
let meuNome="Nino";
let meuSobreNome="JP";
let mIdade=2023-1981;
// Forma tradicional de concatenar string com variáveis
console.log("Meu nome é: " + meuNome + ", meu Sobre nome " + meuSobreNome + " e minha idade atual é: " + mIdade);
//TEMPLATE STRING
// Como usar a template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.
console.log(`Meu nome é: ${meuNome}, meu Sobre nome ${meuSobreNome} e minha idade atual é: ${mIdade}`);
//-------------------------------------------------------------------------------------------------------------------------------

// Praticando os operadores
// A diferença entre fazer comparações com ==, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação,
//e ===, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
a = [];
b = 20;
c = true; 
d = '';
e = ("");
if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}//true

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}//true
console.log(typeof a);
console.log(typeof e);

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}//false
console.log(d);
console.log(typeof d);
console.log(Number(d));

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}//true
//---------------------------------------------------------------------------------------------------

const nome = "Leo";
const idade = 23;
// const idade = 16;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
// Leo diz: "por favor, quero beber cerveja" -> idade = 23
// Leo diz: "por favor, quero beber suco" -> idade = 16