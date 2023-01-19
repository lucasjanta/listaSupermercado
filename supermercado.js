var itens = [];

document.querySelector("input[type=submit]").addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor]');
    
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    })
    
    let listaProduto = document.querySelector('.produtos-lista');
    let soma = 0;
    listaProduto.innerHTML = "";
    itens.map(function(val) {
        soma+=parseFloat(val.valor);
        listaProduto.innerHTML+=`
        <div class="produto-single">
            <h2>`+val.nome+`</h2>
            <h3><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })


    soma = soma.toFixed(2);

    nomeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector('.valor-total h1');
    elementoSoma.innerHTML = 'R$' + soma;

    document.querySelector('.limpar').addEventListener('click', ()=>{
        itens = [];
        document.querySelector('.produtos-lista').innerHTML = "";
        document.querySelector('.valor-total h1').innerHTML = "R$0";
        var botaozin = document.getElementById('botaoshow');
        botaozin.classList.remove("balao-toggle");
    })

    var selecionaItem = document.querySelectorAll('.produto-single');
    var noCarrinho = document.querySelector('.check');
    var deletar = document.querySelector('.delete');

    for (let i = 0; i < selecionaItem.length; i++) {
        selecionaItem[i].setAttribute('id', `item`+ i);
        selecionaItem[i].addEventListener('click', function(event) {
            var botaozin = document.getElementById('botaoshow');
            botaozin.classList.toggle("balao-toggle");
            botaozin.style.position = "absolute";
            botaozin.style.left = event.clientX + "px";
            botaozin.style.top = event.clientY + "px";
            itemescolhido = document.querySelector(`#item`+ i);
        })
    }

    $('.check').click(function(){
            // Seleciona o item desejado e adiciona a classe "line-through"
                itemescolhido.classList.add("line-through");
            });

    $('.delete').click(function(){
        // Seleciona o item desejado e adiciona a classe "line-through"
        itemescolhido.innerHTML = "";
        });
    
})

