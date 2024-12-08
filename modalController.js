/**
  * Exibe o menu de opções
  */
function showMenu() {
  let html = HtmlService.createHtmlOutputFromFile('modalMenuMain')
    .setWidth(1200) // Aumenta a largura para o máximo permitido
    .setHeight(800) // Aumenta a altura para o máximo permitido
  SpreadsheetApp.getUi().showModalDialog(html, `${SERVICENAME}: Catálogo de Produtos`)
}

function showMenuRegistro() {
  let html = HtmlService.createHtmlOutputFromFile('modalMenuMainRegistro')
    .setWidth(1200) // Aumenta a largura para o máximo permitido
    .setHeight(800) // Aumenta a altura para o máximo permitido
  SpreadsheetApp.getUi().showModalDialog(html, `${SERVICENAME}: Planilha de Registro`)
}

function showMenuCampanha() {
  let html = HtmlService.createHtmlOutputFromFile('modalMenuMainCampanha')
    .setWidth(1200/1.4) // Aumenta a largura para o máximo permitido
    .setHeight(800/1.4) // Aumenta a altura para o máximo permitido
  SpreadsheetApp.getUi().showModalDialog(html, `${SERVICENAME}: Gestão de Campanhas`)
}


