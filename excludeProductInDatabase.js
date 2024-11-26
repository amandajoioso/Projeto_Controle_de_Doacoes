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
