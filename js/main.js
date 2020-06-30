                        //Introdução ao Javascript
var nome = 'Zet Zed'; 
var idade = 32;
var idade2 =10;
var frase = "Japão é o melhor time do mundo";
// alert(nome + ' tem ' + idade + ' anos ');
// alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
// alert(frase.replace("Japão","Brasil"));



                            //ARRAY

var lista = ['maçã','pêra','laranja'];
console.log(lista);
console.log(lista[1]);
alert(lista[2]);

//PUSH  = Para adicionar elemento na lista
lista.push('uva');
console.log(lista);
//POP = Para tirar elemento da lista
lista.pop();
console.log(lista);
//LENGTH = Para ver tamanho da lista/ Quantidade de elementos na lista.
console.log(lista.length);
//REVERSE = Para inverter a ordem na lista.
console.log(lista.reverse());
//TOSTRING = Transforma 'array' para 'string', colocando uma 'virgula' para separar os elementos.
console.log(lista.toString());

console.log(lista[0]); //Imprime o elemento da array
console.log(lista.toString()[0]); //Imprime a primeira letra da string

//JOIN =    Assim como o 'toString', ele transforma 'array' em 'string', mas ao invés de virgula, vc consegue colocar o que quer para separar os elementos.
console.log(lista.join(' - '));



                            //DICIONÁRIO

var fruta = {nome:"maçã",cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

                        //LISTA DE DICIOÁRIO

var frutas = [{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

//PROMPT
var idadeinf = prompt("Qual sua idade?");
//IF e ELSE
if (idadeinf >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};

                    //LOOPS - LAÇOS DE REPETIÇÃO
                 
//WHILE                    
var count = 0;
while (count <= 5){
    console.log(count);
    // count += 1;
    count ++;
}
//FOR
var contador;
for (contador=10;contador <=15; contador++){
    console.log(contador);
}

//DATE
var d = new Date();
alert(d);
console.log(d.getMonth()+1);
console.log(d.getHours());

                            //FUNÇÕES

function soma(n1,n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar;
function validaIdade(id){
    
    if (id >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var id = prompt("Qual sua idade");
validaIdade(id)
console.log(validar);


console.log(soma(5,10));
console.log(setReplace('Vai Japão','Japão','Brasil'));


//Botão (index.Html)
function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); // Vai abrir na aba do lado.
    window.location.href = "https://digitalinnovation.one/"; //Vai abrir na mesma página.
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    // alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

//ON LOAD

function load(){
    alert("Página carregada");
}

// ON CHANGE => Sempre que a pessoa trocar o valor no select, consegue coletar o valor. Neste caso passando pro console.
function funcaoChange(elemento){
    console.log(elemento.value)
}