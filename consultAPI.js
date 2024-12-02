function buscarProdutoAPI(codigo_barras = 3282770153477) 
{ const maxKeys = 8;  // Número total de chaves de API configuradas

    // Obtenha o índice da chave atual
    let currentIndex = parseInt(PropertiesService.getScriptProperties().getProperty("API_KEY_INDEX"), 10);
    if (isNaN(currentIndex) || currentIndex < 1) {
        currentIndex = 1;
    }

    // Função para atualizar o índice da chave de API nas propriedades do script
    function atualizarIndiceChave(novoIndice) {
        Logger.log("Atualizando o índice da chave de API para: " + novoIndice);
        PropertiesService.getScriptProperties().setProperty("API_KEY_INDEX", novoIndice);
    }

    // Função para obter a chave de API com base no índice atual
    function obterChaveAtual() {
        const chaveAtual = PropertiesService.getScriptProperties().getProperty("API_KEY_" + currentIndex);
        Logger.log("Obtendo chave de API de índice " + currentIndex + ": " + chaveAtual);
        return chaveAtual;
    }

    // Configurações da requisição
    let tentativas = 0; // Número de tentativas para buscar um produto
    const url = `https://api.cosmos.bluesoft.com.br/gtins/${codigo_barras}`;
    while (tentativas < maxKeys) {
        let token = obterChaveAtual();
        const options = {
            method: "GET",
            headers: {
                "X-Cosmos-Token": token
            },
            muteHttpExceptions: true  // Permite capturar a resposta completa, mesmo em caso de erro
        };

        try {
            Logger.log("Iniciando requisição para URL: " + url + " usando chave de índice: " + currentIndex);
            const response = UrlFetchApp.fetch(url, options);

            // Se a resposta for bem-sucedida (status 200)
            if (response.getResponseCode() === 200) {
                Logger.log("Requisição bem-sucedida. Código de resposta: " + response.getResponseCode());
                const json = JSON.parse(response.getContentText());

                //Logger.log("Resposta bruta: " + JSON.stringify(json, null, 2));

                const nomeProduto = json.description || "Descrição não disponível";

                // Check for weight from API first
                let peso = json.gross_weight
                    ? json.gross_weight + " g"
                    : json.net_weight
                    ? json.net_weight + " g"
                    : "Peso não informado";

                // If weight is still not found, attempt to extract it from the description
                if (peso === "Peso não informado") {
                    const weightMatch = nomeProduto.match(/\b(\d+(?:\.\d+)?\s*[gGmMlL])/); // Matches patterns like "50G", "1L", "500ml"
                    if (weightMatch) {
                        peso = weightMatch[0]; // Extract the matched weight/volume
                    }
                }

                // Simplify descricaoGPC to only the first part before a comma
                let descricaoGPC = json.ncm && json.ncm.full_description
                    ? json.ncm.full_description.split(/[,;]/)[0].trim()
                    : json.ncm && json.ncm.description
                    ? json.ncm.description.split(/[,;]/)[0].trim()
                    : "Descrição não informada";


                const marca = json.brand && json.brand.name ? json.brand.name : "Marca desconhecida";


                Logger.log("Produto encontrado: " + nomeProduto + ", Marca: " + marca + ", Peso: " + peso + ", Categoria: " + descricaoGPC);

                return {
                    nomeProduto: nomeProduto,
                    marca: marca,
                    peso: peso,
                    descricaoGPC: descricaoGPC
                };
            } else if (response.getResponseCode() === 429) {
                // Se receber erro 429, incrementa o índice da chave para a próxima
                Logger.log("Limite de requisições atingido para a chave atual. Código de resposta: " + response.getResponseCode());
                currentIndex = (currentIndex % maxKeys) + 1;  // Vai para a próxima chave no ciclo
                atualizarIndiceChave(currentIndex);  // Salva o novo índice para futuras requisições
                tentativas++;

                Logger.log("Tentando novamente com a próxima chave de API. Novo índice: " + currentIndex);
            } else {
                Logger.log("Erro ao buscar produto: Código de resposta " + response.getResponseCode());
                return {
                    nomeProduto: "Produto não encontrado",
                    marca: "",
                    peso: "",
                    descricaoGPC: ""
                };
            }
        } catch (error) {
            Logger.log("Erro ao buscar produto na API: " + error.message);
            return {
                nomeProduto: "Erro na busca",
                marca: "",
                peso: "",
                descricaoGPC: ""
            };
        }
    }

    // Se todas as chaves foram utilizadas e não conseguimos obter uma resposta bem-sucedida
    Logger.log("Não foi possível obter um produto válido após tentar todas as chaves disponíveis.");
    return {
        nomeProduto: "Produto não encontrado",
        marca: "",
        peso: "",
        descricaoGPC: ""
    };
}
