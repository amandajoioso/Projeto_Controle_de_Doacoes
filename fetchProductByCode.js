// Declara o `Map` globalmente para armazenar os produtos por código de barras
const productMap = new Map();

/**
 * Carrega todos os produtos da planilha em um `Map`.
 * Deve ser chamado periodicamente ou sempre que houver atualizações na planilha.
 */
function initializeProductMap(sheetByName) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetByName);
    const data = sheet.getDataRange().getValues();

    // Limpa o `Map` antes de carregá-lo novamente
    productMap.clear();

    // Itera a partir da segunda linha, assumindo que a primeira linha é o cabeçalho
    for (let i = 1; i < data.length; i++) {
        const barcode = String(data[i][0]); // Converte o código de barras para string
        productMap.set(barcode, {
            row: i + 1, // Armazena a linha do produto
            itemCode:data[i][0],
            itemName: data[i][1],
            itemBrand: data[i][2],
            selectedCategory: data[i][3],
            itemWeight: data[i][4]
        });
    }
}

/**
 * Carrega todos os produtos da planilha em uma lista
 * e busca o último produto inserido a partir do código de barras
 * @return {Object|null} Retorna os dados do produto ou null se não for encontrado.
 */
function searchLastInsertedItem(searchBarCode = 123456789) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha de Registro");
    const data = sheet.getDataRange().getValues();       
    let result = {}
    // Itera a partir da segunda linha, assumindo que a primeira linha é o cabeçalho
    for (let i = data.length - 1; i > 1; i--) {
        const searchBarCodeString = String(searchBarCode);
        const barcode = String(data[i][0]); // Converte o código de barras para string
        if (searchBarCodeString === barcode){
          const resultAux = {
            row: i + 1, // Armazena a linha do produto
            itemCode: data[i][0],
            itemQuantity: data[i][1],
            itemInsertHour: String(data[i][2]),
            campaignId: data[i][3]
          }
          result = resultAux
          break
        }
    }
    console.log(result)  
    return result || null
    
}

/**
 * Função para buscar o produto pelo código de barras usando o `Map` para complexidade O(1).
 * @param {string} barcode - O código de barras a ser buscado.
 * @return {Object|null} Retorna os dados do produto ou null se não for encontrado.
 */
function fetchProductByCode(barcode = 7891000055246) {
    // Certifique-se de que o `Map` está carregado antes de fazer a busca
    if (productMap.size === 0) {
        initializeProductMap("Catálogo de Produtos");
    }

    // Converte o código de barras para string e busca no `Map`
    barcode = String(barcode);
    return productMap.get(barcode) || null;
}
