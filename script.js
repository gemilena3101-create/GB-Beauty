// ==========================
// GB BEAUTY
// ==========================

// Produtos da loja
const produtos = [
    {
        id: 1,
        nome: "Gloss Melu",
        categoria: "Gloss",
        preco: 14.90,
        imagem: "https://picsum.photos/400/400?random=1"
    },
    {
        id: 2,
        nome: "Body Splash",
        categoria: "Body Splash",
        preco: 39.90,
        imagem: "https://picsum.photos/400/400?random=2"
    },
    {
        id: 3,
        nome: "Esponja de Maquiagem",
        categoria: "Acessórios",
        preco: 12.90,
        imagem: "https://picsum.photos/400/400?random=3"
    },
    {
        id: 4,
        nome: "Paleta de Sombras",
        categoria: "Maquiagem",
        preco: 49.90,
        imagem: "https://picsum.photos/400/400?random=4"
    }
];

// Carrinho
let carrinho = [];

// Elementos
const grid = document.querySelector(".produtos-grid");
const contador = document.getElementById("quantidadeCarrinho");

// Carregar produtos
function carregarProdutos() {

    if (!grid) return;

    grid.innerHTML = "";

    produtos.forEach(produto => {

        grid.innerHTML += `
            <div class="produto">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="info">

                    <small>${produto.categoria}</small>

                    <h3>${produto.nome}</h3>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </p>

                    <button onclick="adicionarCarrinho(${produto.id})">
                        Adicionar ao Carrinho
                    </button>

                </div>

            </div>
        `;

    });

}

// Adicionar ao carrinho
function adicionarCarrinho(id){

    const produto = produtos.find(p => p.id === id);

    carrinho.push(produto);

    if(contador){

        contador.textContent = carrinho.length;

    }

}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {

    carregarProdutos();

});
