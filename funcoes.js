
// Um pouco sobre funções visto no material extra das aulas
// Math.round(), retorna o valor de um número arredondado para o inteiro mais próximo.
// var aredondar = Math.round(divisao);
// console.log(aredondar);

// Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamos: toFixed(2)
// var aredondar2 = divisao.toFixed(2);
// console.log(aredondar2);
//--------------------------------------------------------------------------------------------------------
/*
printText("Oi");//pelo q entendi posso chamar a função em qualquer lugar, mesmo antes de declara-la
//DECLARA a função e atrubui um (PARAMETRO)
function printText(texto){
    console.log(texto);
}
// EXECUTA(chama) a função
// printText("Oi");
printText("Outro Texto");
//-------------------------------------------------------------------------------------------------------

function soma(){
    // const resultado=2+2; //neste caso não é necessário declarar uma variável
    // return resultado; //para depois retornar o valor da variável
    return 2+2;
}
console.log(soma());
printText(soma())//Podemos usar uma função para EXECUTAR outra função
//-------------------------------------------------------------------------------------------------------

// FUNÇÕES MATEMÁTICAS PRÉ DEFINAS DO ECMAScript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description
// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
console.log(Math.round(4.3)+"\n");// retorna 4, reparar que após eu colocar o \n(quebra de linha) o resultado passou a ser do TIPO STRING
console.log(Math.round(3.85));// retorna 4
console.log(Math.round(2.5));// retorna 3, quando o número termina com 0.5 a função arredonda para cima
console.log("\n");
// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
console.log(Math.ceil(5.2)); //retorna 6
console.log("");
// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
console.log(Math.floor(5.6)); //etorna 5
console.log("");
// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
console.log(Math.trunc(4.3)); //retorna 4
console.log(Math.trunc(4.8)); //retorna 4
console.log("");
// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
console.log(Math.pow(4 , 2)); //retorna 4^2 = 16
console.log(Math.pow(2.5 , 1.5)); //retorna 2.5^(3/2) = 3.9528 ...
let aredondado = Math.pow(2.5 , 1.5);
console.log(Math.round(aredondado));
console.log("");
// Math.sqrt() : Retorna a raiz quadrada de um número.
console.log(Math.sqrt(64)); //retorna 8
console.log("");
// Math.min(): Retorna o menor valor entre os argumentos.
console.log(Math.min(0, 150, 30, 20, -8, -200)); //retorna -200
console.log("");
// Math.max(): Retorna o maior valor entre os argumentos.
console.log(Math.max(0, 150, 30, 20, -8, -200)); //retorna 150
console.log("");
// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
console.log(Math.random()); //retorna 0.7456916270759015
console.log(Math.random()); //retorna 0.15449802102729304
console.log(Math.random()); //retorna 0.4214269561951203
console.log("");
// Gerando um número inteiro aleatório entre dois valores, inclusive o min e o max(que no caso são os valores definidos)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(getRandomIntInclusive(1, 100));
//-------------------------------------------------------------------------------------------------------------------------------
*/

// PARÂMETROS E ARGUMENTOS
// Parâmetro é a variável que irá receber um valor em uma função (ou método) enquanto que um argumento é o valor (que pode originar de uma variável ou expressão) que você passa para a função (ou método).
//Você não passa parâmetros, você passa argumentos. Você recebe argumentos também, mas recebe em parâmetros. Você parametriza sua função com informações que virão posteriormente. Você argumenta com o que deseja executar uma função devidamente parametrizada.
//Pode haver menos os mais argumentos para cada parâmetro já que existem parâmetros que são opcionais e outros que podem ser listas variáveis de dados. Portanto não há uma relação de um para um e a distinção entre eles é importante.
//Mas na prática do dia a dia são usados como sinônimos.
            //parâmetro1, parâmetro2
function somar(num1, num2){
    return num1 + num2;
}
// A ORDEM dos argumentos deve estar e será executada na MESMA ORDEM dos parametros  
                //argumento1, argumento2
console.log(somar(2, 2));
console.log(somar(245, 20));
console.log(somar(-500, 60));
console.log("");
// Os nomes dos parâmetros podem ser os mesmos JÁ USADOS, pois somente são validos dentro do SCOPO da função
function multiplicar(num1, num2){
    return num1 * num2;
}
console.log(multiplicar(somar(4,5), somar(3,3)));
console.log("");
// Definindo um VALOR PADRÃO(parametro = valorPadrão) para o parametro, 
function multiplicar(num1 = 1, num2 = 1){
    return num1 * num2;
}
console.log(multiplicar(somar(4,5))); // Exibi NaN, ANTES DE DEFINIR o valor padrão, pois está faltando um argumento
//--------------------------------------------------------------------------------------------------------------------------------

// A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde podemos passar qualquer nome no momento
//em que executamos (ou chamamos) a função. Quando isso acontecer, a função cumprimentar() será executada também,
//e seu valor de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo chamada.
function cumprimentar(){
    return 'Oi gente!'
}
function cumprimentaPessoa(nomePessoa) {
console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
cumprimentaPessoa('Nino') // “Oi gente! Meu nome é Nino”
console.log("\n");
//-------------------------------------------------------------------------------------------------------------------------------

// AS 3 FORMAS DE ESCREVER AS FUNÇÕES

// Declaração de função, Forma 1 DECLARATIVA
function somando(param) {
    console.log("O parametro é: "+param);
}
somando();
console.log("");

// Expressão de função, Forma 2 de EXPRESSÃO, função ANÔNIMA
// No entanto, um nome pode ser fornecido com uma expressão de função e pode ser utilizado no interior da função para se referir a si mesma, 
//ou em um debugger para identificar a função em stack traces:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
// console.log(somando2(5,5)); //Exibi ERRO
const somando2 = function (param1, param2) {return param1+param2}
console.log(somando2(5,5));
console.log("\n");

// ARROW Function, Forma 3 de seta, também e ANÔNIMA e é terceira forma de se escrever as funções
const somando3 = param => `Retorno da função é: ${param}`;
console.log(somando3(1000+"e um"));
console.log("");
// Se for usar mais de um parametro use (param1, param3) => e se tiver mais de uma linha dentro da função use {return}
const somando4 = (param1, param2) => {
    if (param1 > 10 || param2 > 10) {
        return `Um dos Numeros é maior que 10`;
    } else {
        return param1 + param2;
    }
}
console.log(somando4(11,4));
console.log("\n");
// A PRINCIPAL DIFERENÇA entre as três formas de escrever as funções é: HOISTING(elevação)
// Tanto o VAR quanto a função declarada serão elevadas(LIDAS, listadas no topo) na primeira passagem, leitura do código
// Já a CONST é um tipo de variável e só pode ser usada após sua declaração
//-----------------------------------------------------------------------------------------------------------------------------

// USO DA CONDICIONAL ELSE IF
//Veja que a cláusula else if também precisa receber a condição (ou as condições) como parâmetros, ao contrário do else, 
//que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado
//caso todas as outras condições anteriores falhem.
const num = 15;
if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}