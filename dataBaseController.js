function registerProduct(itemCode='123456789', itemName='a', itemBrand='b', selectedCategory='Alimento', itemWeight='2',itemUnit='ml (mililitros)') {
  try {
    // Validações de dados feita no front end

    // Se todas as validações passarem, prossegue para inserir os dados na planilha
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var productsSheet = ss.getSheetByName("Catálogo de Produtos");

    var row = productsSheet.getLastRow() + 1;

    // Adiciona os dados do produto à planilha
    productsSheet.getRange(row, 1).setValue(itemCode);
    productsSheet.getRange(row, 2).setValue(itemName);
    productsSheet.getRange(row, 3).setValue(itemBrand);
    productsSheet.getRange(row, 4).setValue(selectedCategory);
    productsSheet.getRange(row, 5).setValue(itemWeight);
    productsSheet.getRange(row, 6).setValue(itemUnit);

  } catch (error) {
    // Retorna o erro para o cliente
    throw new Error(`Erro ao registrar produto: ${error.message}`);
  }  
}

function registerProductInRecordSheet(itemCode, itemQuantity, campaignId) {
  try {
    // Validações de dados feita no front end

    // Se todas as validações passarem, prossegue para inserir os dados na planilha
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var productsSheet = ss.getSheetByName("Planilha de Registro");

    var row = productsSheet.getLastRow() + 1;

    // Adiciona os dados do produto à planilha
    productsSheet.getRange(row, 1).setValue(itemCode);
    productsSheet.getRange(row, 2).setValue(itemQuantity);
    productsSheet.getRange(row, 3).setValue(new Date());
    productsSheet.getRange(row, 4).setValue(campaignId);

  } catch (error) {
    // Retorna o erro para o cliente
    throw new Error(`Erro ao registrar produto: ${error.message}`);
  }  
}