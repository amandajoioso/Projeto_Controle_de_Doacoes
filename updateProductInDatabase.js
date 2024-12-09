function updateProductInDatabase(row, itemCode, itemName, itemBrand, selectedCategory, itemWeight) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catálogo de Produtos");
    sheet.getRange(row, 1).setValue(itemCode);         // Coluna para Barras do item
    sheet.getRange(row, 2).setValue(itemName);         // Coluna para Nome do item
    sheet.getRange(row, 3).setValue(itemBrand);        // Coluna para Marca do item
    sheet.getRange(row, 4).setValue(selectedCategory); // Coluna para Categoria
    sheet.getRange(row, 5).setValue(itemWeight);       // Coluna para Peso do item
    sheet.getRange(row, 6).setValue(itemUnit);
}

function updateProductInRecordSheet(row, itemCode, itemQuantity, campaignId) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha de Registro");
    sheet.getRange(row, 1).setValue(itemCode);         // Coluna para Barras do item
    sheet.getRange(row, 2).setValue(itemQuantity);     // Coluna para Nome do item
    sheet.getRange(row, 3).setValue(new Date());    
    sheet.getRange(row, 4).setValue(campaignId); // campanha vai ser o último nome da planilha de Gestão de Campanhas
}

function registerCampaignInRecordSheet(campaignName, startDate, endDate) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Gestão de Campanhas");
  var row = sheet.getLastRow() + 1;  
    
  sheet.getRange(row, 1).setValue(campaignName); 
  sheet.getRange(row, 2).setValue(startDate);      
  sheet.getRange(row, 3).setValue(endDate);
}