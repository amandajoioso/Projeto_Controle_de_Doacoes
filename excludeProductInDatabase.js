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

function excludeProductInDatabaseCampanha(campanha) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Gestão de Campanhas");
  const lastRow = sheet.getLastRow();
  
  // Caso a planilha não tenha linhas de dados além do cabeçalho, retorne false
  if (lastRow < 2) {
    return false;
  }
  
  // Obtém os valores da coluna A (nomes das campanhas) a partir da linha 2 até a última linha preenchida.
  const data = sheet.getRange("A2:A" + lastRow).getValues();
  
  // Normaliza o nome da campanha para minúsculas
  const targetName = String(campanha).toLowerCase();

  // Percorre os valores para encontrar a linha correspondente
  for (let i = 0; i < data.length; i++) {
    const currentCampaign = String(data[i][0]).toLowerCase();
    if (currentCampaign === targetName) {
      // Como data inicia na linha 2, a linha real na planilha é i+2
      const rowToDelete = i + 2;
      sheet.deleteRow(rowToDelete);
      return true; // Retorna true se a campanha foi encontrada e excluída
    }
  }

  // Caso a campanha não seja encontrada
  return false;
}

function findRowIndexById(indexColumn, rowId) {
  // Busca o ID diretamente, sem iterar todas as linhas manualmente
  var map = {};
  
  // Cria um mapa para busca em O(1)
  for (var i = 0; i < indexColumn.length; i++) {
    map[indexColumn[i][0].toLowerCase()] = i + 1; // mapeia ID para o índice (base 1)
  }

  // Retorna o índice da linha, ou -1 se não encontrar o ID
  return map[rowId.toLowerCase()] || -1;
}
