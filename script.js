// ================================
// GB BEAUTY
// Produtos
// ================================

const produtos = [

{
    id:1,
    nome:"Gloss Melu",
    preco:14.90,
    categoria:"Gloss",
    imagem:"https://placehold.co/400x400/F8D7E5/CB4C84?text=Gloss"
},

{
    id:2,
    nome:"Body Splash",
    preco:39.90,
    categoria:"Body Splash",
    imagem:"https://placehold.co/400x400/FCE7F1/CB4C84?text=Body+Splash"
},

{
    id:3,
    nome:"Esponja de Maquiagem",
    preco:12.90,
    categoria:"Acessórios",
    imagem:"https://placehold.co/400x400/FFEAF3/CB4C84?text=Esponja"
},

{
    id:4,
    nome:"Paleta de Sombras",
    preco:49.90,
    categoria:"Maquiagem",
    imagem:"https://placehold.co/400x400/F9DCE9/CB4C84?text=Paleta"
}

];
let carrinho = [];

const contador = document.getElementById("quantidadeCarrinho");

console.log(contador);

const grid = document.querySelector(".produtos-grid");

function carregarProdutos(){

grid.innerHTML="";

produtos.forEach(produto=>{

grid.innerHTML += `

<div class="produto">

<img src="${produto.imagem}" alt="${produto.nome}">

<div class="info">

<small>${produto.categoria}</small>

<h3>${produto.nome}</h3>

<p class="preco">
R$ ${produto.preco.toFixed(2).replace(".",",")}
</p>

<button onclick="adicionarCarrinho(${produto.id})">

Adicionar ao Carrinho

</button>

</div>

</div>

`;

});

}

function adicionarCarrinho(id){

const produto = produtos.find(p => p.id === id);

console.log(produto);

carrinho.push(produto);

console.log(carrinho);

contador.innerHTML = carrinho.length;

}
carregarProdutos();
