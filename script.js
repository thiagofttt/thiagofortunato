//BOTAO NAO

document.addEventListener('DOMContentLoaded', function () {
    const botaoNao = document.getElementById('nao');

    botaoNao.addEventListener('click', function() {
        // Obtém as dimensões da janela
        const maxX = window.innerWidth - botaoNao.offsetWidth;
        const maxY = window.innerHeight - botaoNao.offsetHeight;

        // Gera posições aleatórias dentro dos limites da tela
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Define a nova posição usando top e left
        botaoNao.style.position = 'absolute';
        botaoNao.style.left = `${randomX}px`;
        botaoNao.style.top = `${randomY}px`;
    });
});


//INPUT CONFIRMAR

document.getElementById('confirmar').addEventListener('click', function() {
    const senha = document.getElementById('senha').value;
    const ghostMessage = document.getElementById('ghost');

    if (senha === '23062024') {
        ghostMessage.style.display = 'block'; // Show the message
    } else {
        alert('Senha incorreta. Tente novamente.'); // Alert for incorrect password
    }
});

// Initially hide the ghost message
document.getElementById('ghost').style.display = 'none';

//CONTAGEM

document.addEventListener('DOMContentLoaded', () => {
    // Data inicial: 13 de julho de 2024
    const dataInicial = new Date('2024-07-13T19:00:00');

    // Função para calcular a diferença
    function atualizarContagem() {
        const dataAtual = new Date(); // Obtém a data atual
        const diferencaMilissegundos = dataAtual - dataInicial;

        // Calcula dias, horas, minutos e segundos
        const dias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaMilissegundos % (1000 * 60)) / 1000);

        // Atualiza o elemento na página
        const elementoContagem = document.getElementById('contagem');
        elementoContagem.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }

    // Atualiza a contagem a cada segundo
    setInterval(atualizarContagem, 1000);
});





document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.foto-imagem');
    let index = 0; // Inicia com a primeira imagem

    // Função para alternar as imagens
    function alternarImagens() {
        // Remove a classe 'active' de todas as imagens
        imagens.forEach((img) => img.classList.remove('active'));

        // Adiciona a classe 'active' à imagem atual
        imagens[index].classList.add('active');

        // Atualiza o índice para a próxima imagem, e volta para 0 quando chega ao fim
        index = (index + 1) % imagens.length;
    }

    // Chama a função para alternar imagens a cada 3 segundos
    setInterval(alternarImagens, 3000);

    // Exibe a primeira imagem ao carregar
    alternarImagens();
});

