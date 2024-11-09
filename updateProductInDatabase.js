function updateProductInDatabase(row, itemCode, itemName, itemBrand, selectedCategory, itemWeight) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Catálogo de Produtos");
    sheet.getRange(row, 1).setValue(itemCode);         // Coluna para Barras do item
    sheet.getRange(row, 2).setValue(itemName);         // Coluna para Nome do item
    sheet.getRange(row, 3).setValue(itemBrand);        // Coluna para Marca do item
    sheet.getRange(row, 4).setValue(selectedCategory); // Coluna para Categoria
    sheet.getRange(row, 5).setValue(itemWeight);       // Coluna para Peso do item
}
