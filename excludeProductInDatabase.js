function excludeProductInDatabase(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catálogo de Produtos");
  console.log(row);
  sheet.deleteRow(row);
}

function excludeProductInDatabaseRegistro(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha de Registro");
  console.log(row);
  sheet.deleteRow(row);
}

function excludeProductInDatabaseCampanha(rowId='asdasd') {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Gestão de Campanhas"); // Nome da aba da planilha
  var indexColumn = sheet.getRange("A:A").getValues(); // Obtém todos os valores da coluna de IDs (coluna A)
  
  // Encontrar o índice da linha com o ID
  var rowIndexToDelete = findRowIndexById(indexColumn, rowId);
  
  if (rowIndexToDelete !== -1) {
    // Exclui a linha correspondente ao ID
    sheet.deleteRow(rowIndexToDelete);
    return true; // Retorna true indicando que a exclusão foi bem-sucedida
  } else {
    return false; // Retorna false caso o ID não tenha sido encontrado
  }
}

function findRowIndexById(indexColumn, rowId) {
  // Busca o ID diretamente, sem iterar todas as linhas manualmente
  var map = {};
  
  // Cria um mapa para busca em O(1)
  for (var i = 0; i < indexColumn.length; i++) {
    map[indexColumn[i][0]] = i + 1; // mapeia ID para o índice (base 1)
  }

  // Retorna o índice da linha, ou -1 se não encontrar o ID
  return map[rowId] || -1;
}
