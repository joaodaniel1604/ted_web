var styleTag = document.createElement('style');
document.head.appendChild(styleTag);

styleTag.innerHTML = `
  img {
    width: 150px;
    height: 150px;
  }
`;

const entradas = [
    { nome: "Caldo de mandioquinha", imagem: "img/entrada-1.jpg", preco: 15.99 },
    { nome: "Caprese no palito", imagem: "img/entrada-3.jpg", preco: 19.99 },
    { nome: "Vol-au-vent de camarão", imagem: "img/entrada-2.jpg", preco: 29.99 },
];

const sobremesas = [
    { nome: "Tieta e Julieta", imagem: "img/sobremesa-1.jpg", preco: 15.99 },
    { nome: "O bêbado e o equilibrista", imagem: "img/sobremesa-2.jpg", preco: 14.99 },
    { nome: "Rei Arthur", imagem: "img/sobremesa-3.jpg", preco: 12.99 },
];
const pratosPrincipais = [
    { nome: "Paillard de filet", imagem: "img/prato-principal-1.jpg", preco: 55.99 },
    { nome: "Gold arripa mustard", imagem: "img/prato-principal-2.jpg", preco: 59.99 },
    { nome: " Steak tartare", imagem: "img/prato-principal-3.jpg", preco: 65.99 },
    { nome: "Gold arripa mustard", imagem: "img/prato-principal-4.jpg", preco: 59.99 },
    { nome: "Gold arripa mustard", imagem: "img/prato-principal-5.jpg", preco: 69.99 },
];


function exibirOpcoes(opcoes, categoria) {
    const opcoesContainer = document.getElementById(categoria + '-opcoes');
    
    opcoes.forEach((opcao, index) => {
        const opcaoDiv = document.createElement('div');
        opcaoDiv.classList.add('opcao');
        
        const imagem = document.createElement('img');
        imagem.src = opcao.imagem;
        imagem.alt = opcao.nome;
        
        const nomeOpcao = document.createElement('span');
        nomeOpcao.textContent = opcao.nome;
        
        const precoOpcao = document.createElement('span');
        precoOpcao.textContent = 'Preço: R$ ' + opcao.preco.toFixed(2);
        
        const botaoEscolher = document.createElement('button');
        botaoEscolher.textContent = 'Escolher';
        botaoEscolher.addEventListener('click', () => {
            escolherPrato(categoria, opcao);
        });
        
        opcaoDiv.appendChild(imagem);
        opcaoDiv.appendChild(nomeOpcao);
        opcaoDiv.appendChild(precoOpcao);
        opcaoDiv.appendChild(botaoEscolher);
        
        opcoesContainer.appendChild(opcaoDiv);
    });
}
let carrinho = {
    entrada: null,
    pratoPrincipal: null,
    sobremesa: null,
};

function calcularPrecoTotal() {
    let precoTotal = 0;

    for (const categoria in carrinho) {
        if (carrinho[categoria] !== null) {
            precoTotal += carrinho[categoria].preco;
        }
    }

    return precoTotal.toFixed(2);
}
function exibirMenuFinal() {
    const menuFinalContainer = document.getElementById('menu-final');
    menuFinalContainer.innerHTML = '';

    for (const categoria in carrinho) {
        if (carrinho[categoria] !== null) {
            const pratoEscolhido = carrinho[categoria];

            const pratoDiv = document.createElement('div');
            pratoDiv.classList.add('prato-final');

            const imagem = document.createElement('img');
            imagem.src = pratoEscolhido.imagem;
            imagem.alt = pratoEscolhido.nome;

            const nomePrato = document.createElement('span');
            nomePrato.textContent = pratoEscolhido.nome;

            const precoPrato = document.createElement('span');
            precoPrato.textContent = 'Preço: R$ ' + pratoEscolhido.preco.toFixed(2);

            pratoDiv.appendChild(imagem);
            pratoDiv.appendChild(nomePrato);
            pratoDiv.appendChild(precoPrato);
            

            menuFinalContainer.appendChild(pratoDiv);
        }
    }

    const precoTotal = calcularPrecoTotal();
    const precoTotalElement = document.createElement('p');
    precoTotalElement.textContent = 'Preço Total: R$ ' + precoTotal;

    menuFinalContainer.appendChild(precoTotalElement);
}

function escolherPrato(categoria, prato) {
    carrinho[categoria] = prato;
    exibirMenuFinal();
}

window.addEventListener('load', function () {
    exibirOpcoes(entradas, 'entrada');
    exibirOpcoes(pratosPrincipais, 'pratoPrincipal');
    exibirOpcoes(sobremesas, 'sobremesa');
});