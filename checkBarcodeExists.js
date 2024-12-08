// Google Apps Script: Função para verificar a existência do código de barras como texto
function checkBarcodeExists(barcode) {
  // Corrige o nome da planilha para "Catálogo de Produtos"
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catálogo de Produtos");

  // Obtém os dados da coluna A e converte para um Set para busca eficiente
  const data = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  const barcodeSet = new Set(data.map(row => String(row[0]))); // Converte todos os valores para string

  // Verifica se o código de barras existe no Set
  return barcodeSet.has(String(barcode));
}

function checkExistsCampanha(campanha) {
  // Corrige o nome da planilha para "Gestão de Campanhas"
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Gestão de Campanhas");

  // Obtém os dados da coluna A e converte para um Set para busca eficiente
  const data = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  const campanhaSet = new Set(data.map(row => String(row[0]))); // Converte todos os valores para string

  // Verifica se a campanha existe no Set
  return campanhaSet.has(String(campanha));  
}
