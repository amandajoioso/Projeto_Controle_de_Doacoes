function Atualizar() {
  const ui = SpreadsheetApp.getUi();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const abaPrincipal = ss.getActiveSheet();
  const bancoDados = ss.getSheetByName("Banco de Dados");
  
  // Obter os valores dos campos de atualização da planilha
  var atualizacaoID = abaPrincipal.getRange("G8").getValue();
  var atualizacaoItem = abaPrincipal.getRange("G10").getValue();
  var atualizacaoMarca = abaPrincipal.getRange("G11").getValue();
  var atualizacaoCategoria = abaPrincipal.getRange("G12").getValue();
  var atualizacaoPeso = abaPrincipal.getRange("G13").getValue();

  // Verificar se todos os campos necessários estão preenchidos
  if (atualizacaoID === "" || atualizacaoItem === "" || atualizacaoCategoria === "" || atualizacaoPeso === "" || atualizacaoMarca === "") {
    ui.alert("Não estão preenchidos todos os dados necessários para realizar essa ação.");
    return;
  }

  // Obter a posição da coluna ID na planilha "Banco de Dados"
  var colunaID = bancoDados.getRange("B:B").getColumn(); // Coluna onde está o ID (coluna B)

  var linhaInicio = bancoDados.getRange("bdID").getRow();
  var colunaInicio = colunaID;

  // Criar um array com os dados de atualização (preço, mercado e status)
var dadosAtualizacao = [[atualizacaoID,atualizacaoItem,atualizacaoMarca,atualizacaoCategoria, atualizacaoPeso]];
  
  // Atualizar o preço, mercado e status na linha correspondente na planilha "Banco de Dados"
  bancoDados.getRange(linhaInicio + atualizacaoID, colunaInicio, 1, 5).setValues(dadosAtualizacao);

  // Limpar os campos de atualização na planilha principal
  abaPrincipal.getRange("D8").clearContent();
   

  
  // Limpar os campos de atualização na planilha principal
  abaPrincipal.getRange("G10").clearContent();
  abaPrincipal.getRange("G11").clearContent();
  abaPrincipal.getRange("G12").clearContent();
  abaPrincipal.getRange("G13").clearContent();


  // Exibir um alerta com os detalhes da atualização realizada
  ui.alert("Item atualizado com sucesso\n\nItem: " + atualizacaoItem + "\nCategoria: " + atualizacaoCategoria + "\nPeso: " + atualizacaoPeso + "\nMarca: " + atualizacaoMarca);
}
