function excludeProductInDatabase(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catálogo de Produtos");
  console.log(row);
  sheet.deleteRow(row);
}