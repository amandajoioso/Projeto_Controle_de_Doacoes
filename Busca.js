function Buscar() {
  const ui = SpreadsheetApp.getUi();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const abaPrincipal = ss.getActiveSheet();
  const bancoDados = ss.getSheetByName("Banco de Dados");

  // Obter os valores dos campos de busca da planilha
  var buscaID = abaPrincipal.getRange("D28").getValue();
  var buscaItem = abaPrincipal.getRange("D29").getValue();
  var buscaCategoria = abaPrincipal.getRange("D30").getValue();
  var buscaMarca = abaPrincipal.getRange("D31").getValue();
  var buscaPeso = abaPrincipal.getRange("D32").getValue();

  // Verificar se pelo menos um campo foi preenchido
  if (buscaID === "" && buscaItem === "" && buscaCategoria === "" && buscaMarca === "" && buscaPeso === "") {
    ui.alert("Por favor, preencha pelo menos um dos campos de busca.");
    return;
  }

  // Obter todos os dados da planilha "Banco de Dados"
  var dados = bancoDados.getDataRange().getValues();
  
  // Variável para armazenar os resultados da busca
  var resultados = [];

  // Percorrer as linhas da planilha "Banco de Dados" a partir da linha 2 (ignora o cabeçalho)
  for (var i = 1; i < dados.length; i++) {
    var linha = dados[i];
    var id = linha[1].toString();
    var item = linha[2].toString();
    var marca = linha[3].toString();
    var categoria = linha[4].toString();
    var peso = linha[5].toString();

    // Verificar se os critérios de busca correspondem (permitir busca parcial ou por campos específicos)
    var idCorresponde = (buscaID === "" || id === buscaID.toString());
    var itemCorresponde = (buscaItem === "" || item.toLowerCase().includes(buscaItem.toLowerCase()));
    var categoriaCorresponde = (buscaCategoria === "" || categoria.toLowerCase().includes(buscaCategoria.toLowerCase()));
    var marcaCorresponde = (buscaMarca === "" || marca.toLowerCase().includes(buscaMarca.toLowerCase()));
    var pesoCorresponde = (buscaPeso === "" || peso.includes(buscaPeso));

    // Se todos os critérios correspondem, adicionar à lista de resultados
    if (idCorresponde && itemCorresponde && categoriaCorresponde && marcaCorresponde && pesoCorresponde) {
      resultados.push(linha);
    }
  }

  // Exibir os resultados
  if (resultados.length > 0) {
    // Criar uma nova planilha para exibir os resultados ou limpar a existente
    var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Resultados');
    if (!resultSheet) {
      resultSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Resultados');
    } else {
      resultSheet.clear(); // Limpar resultados anteriores
    }

    // Adicionar cabeçalho
    resultSheet.getRange(1, 1, 1, dados[0].length).setValues([dados[0]]); // Copiar o cabeçalho da planilha original
    // Adicionar resultados
    resultSheet.getRange(2, 1, resultados.length, resultados[0].length).setValues(resultados); 

    ui.alert(resultados.length + " resultado(s) encontrado(s) e exibido(s) na aba 'Resultados'.");
  } else {
    ui.alert("Nenhum resultado encontrado para os critérios fornecidos.");
  }
}