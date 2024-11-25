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

/**
  * Exibe o menu de opções
  */
function showModalRegister() {
  let html = HtmlService.createHtmlOutputFromFile('modalRegister')
    .setWidth(900)
    .setHeight(600)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(html, `${SERVICENAME}: Cadastro`)
}

function showModalAtualizar() {
  let html = HtmlService.createHtmlOutputFromFile('modalAtualizar')
    .setWidth(900)
    .setHeight(600)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(html, `${SERVICENAME}: Atualização`)
}