//CRIANDO A CLASS/OBJETO PESSOA COM SEUS ATRIBUTOS, NOME E SOBRENOME
//OBS: O OBJETO PODE SER TER UM OU MILHARES DE ATRIBUTOS DEPENDENDO DA NECESSIDADE DA APLICAÇÃO
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freez(this)    
}

//INSTANCIANDO O OBJETO CRIADO
const p1 = new Pessoa('Thiago', 'Forteski');
const p2 = new Pessoa('João', 'Lima');
const p3 = new Pessoa('Helena', 'Froggle');

console.log(p1);
console.log(p2);
console.log(p3);
