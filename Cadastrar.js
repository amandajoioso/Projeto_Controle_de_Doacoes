function Cadastrar() {
  const ui = SpreadsheetApp.getUi();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const abaPrincipal = ss.getActiveSheet();
  const bancoDados = ss.getSheetByName("Banco de Dados");
  
  // Obter os valores dos campos de cadastro da planilha
  var cadastroItem = abaPrincipal.getRange("D19").getValue();
  var cadastroCategoria = abaPrincipal.getRange("D20").getValue();
  var cadastroMarca = abaPrincipal.getRange("D21").getValue();
  var cadastroPeso = abaPrincipal.getRange("D22").getValue();

  // Verificar se todos os campos necessários estão preenchidos
  if (cadastroCategoria === "" || cadastroItem === "" || cadastroMarca === "" || cadastroPeso === "") {
    ui.alert("Não estão preenchidos todos os dados necessários para realizar essa ação.");
    return;
  }

  // Obter o último ID na coluna "B" (coluna ID) da planilha "Banco de Dados"
  var colunaID = 2; // Coluna onde está o ID (coluna B)
  var ultimoID = bancoDados.getRange(bancoDados.getLastRow(), colunaID).getValue();
  
  // Determinar a posição da próxima linha vazia na coluna ID
  var linhaUltimoID = bancoDados.getLastRow() + 1;
  var colunaUltimoID = colunaID;

  // Criar um array com os dados do novo cadastro
  var novoID = ultimoID + 1;
  var dadosCadastro = [[novoID, cadastroItem, cadastroMarca, cadastroCategoria,cadastroPeso]];
  
  // Inserir os dados do novo cadastro na próxima linha vazia da planilha "Banco de Dados"
  bancoDados.getRange(linhaUltimoID, colunaUltimoID, 1,5).setValues(dadosCadastro);

  // Limpar os campos de cadastro na planilha principal
  abaPrincipal.getRange("D19").clearContent();
  abaPrincipal.getRange("D20").clearContent();
  abaPrincipal.getRange("D21").clearContent();
  abaPrincipal.getRange("D22").clearContent();

  // Exibir um alerta com os detalhes do cadastro realizado
  ui.alert("Item cadastrado com sucesso\n\nItem: " + cadastroItem + "\nCategoria: " + cadastroCategoria + "\nMarca: " + cadastroMarca + "\nPeso: " + cadastroPeso);
}
