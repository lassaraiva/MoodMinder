let pontuacaoTotal = 0;

function ocultarHeader() {
    document.querySelector('#cabecalho').style.display = 'none';
}

function iniciarQuiz() {
    document.querySelector('#comecarQuiz').style.display = 'none';
    document.querySelector('#quiz').style.display = 'block';
}

function proximaPergunta(numeroPergunta) {
    let perguntaAtual = document.querySelector('#pergunta' + numeroPergunta);
    let proximaPergunta = document.querySelector('#pergunta' + (numeroPergunta + 1));

    if (perguntaAtual) {
        let resposta = document.querySelector('input[name="q' + numeroPergunta + '"]:checked');
        if (resposta) {
            pontuacaoTotal += parseInt(resposta.value);
        } else {
            alert('Please, select an option.');
            return;
        }
        perguntaAtual.style.display = 'none';
    }

    if (proximaPergunta) {
        proximaPergunta.style.display = 'block';
    } else {
        calcularPontuacao();
    }
}

function calcularPontuacao() {
    let mensagem = "";
    let pontuacao = pontuacaoTotal;

    if (pontuacao >= 0 && pontuacao <= 9) {
        exibirMensagem('mensagem-none');
    } else if (pontuacao >= 10 && pontuacao <= 23) {
        exibirMensagem('mensagem-moderada');
    } else if (pontuacao >= 24 && pontuacao <= 32) {
        exibirMensagem('mensagem-severa');
    }

    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#pontuacao').innerText = "Total score: " + pontuacao + "/32\n\n**The quiz is for educational purposes only. Please do not treat the result as a diagnosis!";
}

function exibirMensagem(mensagemId) {
    document.querySelectorAll('.mensagem').forEach(function(mensagem) {
        mensagem.style.display = 'none';
    });
    document.getElementById(mensagemId).style.display = 'block';
}

function selecionarOpcao(opcao) {
    let opcoes = opcao.parentNode.querySelectorAll('.opcao');
    opcoes.forEach(function(item) {
        item.style.backgroundColor = '#e2e1fc';
        item.querySelector('input').checked = false;
    });
    opcao.style.backgroundColor = '#F0C5DF';
    opcao.querySelector('input').checked = true;
}