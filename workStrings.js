
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // retorna false

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";
// O método toLowerCase(), converte todos os caracteres da string informada, para letras minúsculas
const inputMinusculo = input1.toLowerCase();
console.log(cidade1 === inputMinusculo); // Retorna true
// Métodos genéricos de Strings
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
//O JavaScript é case-sensitive(sensível a maiúsculas e minúsculas)
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;
console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);

// A propriedade length de um objeto String contém o comprimento da string. length é uma propriedade read-only (somente leitura) de instâncias de string.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
const senha = "minhaSenha123"
console.log(senha.length+' Caracteres') // 13 caracteres
// Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades.

// camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

// snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

// kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.

// PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

// Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.
