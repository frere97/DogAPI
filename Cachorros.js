// URL da API que retorna 5 imagens aleatórias de cachorros
const url = "https://dog.ceo/api/breeds/image/random/5";

// Variável para armazenar as URLs das fotos dos cachorros


// Função principal que inicia o processo de obter imagens aleatórias de cachorros
function obterFotosAleatorias() {
    console.log("Iniciando busca por fotos de cachorros...");
    
    // Realiza a requisição HTTP usando fetch
    fetch(url)
        // Converte a resposta para JSON
        .then(function(response) {
            console.log(response.status);
            return response.json();
        })
        .then(function(data) {
            // Armazena as URLs das imagens no array todasAsFotos
            exibirFotos(data.message);
            console.log("Fotos de cachorros obtidas com sucesso:");
            
            // Chama a função para exibir as fotos na página
            
        })
        // Trata erros caso ocorram na requisição
        .catch(function(error) {
            console.error("Ocorreu um erro ao obter as fotos de cachorros:", error);
        });
}

// Função para exibir as fotos na página
function exibirFotos(todasAsFotos) {
    // Obtém o elemento HTML onde as fotos serão exibidas
    const containerDeFotos = document.getElementById("cachorros");

    // Limpa qualquer conteúdo existente no container (caso necessário)
    containerDeFotos.innerHTML = "";

    // Itera sobre todasAsFotos e cria elementos <img> para cada URL
    todasAsFotos.forEach(function(fotoUrl) {
        const img = document.createElement("img");
        img.src = fotoUrl;
        img.alt = "Foto de um cachorro";
        containerDeFotos.appendChild(img);
    });
}

// Inicia o processo de obter e exibir fotos de cachorros ao carregar a página
obterFotosAleatorias();