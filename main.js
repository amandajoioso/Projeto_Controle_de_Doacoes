/**
  * Nome do serviço
  */
const SERVICENAME = 'Catálogo de Produtos'

function onOpen(e) {
  /**
    * Cria o Menu "Catálogo de Produtos"
    */
  let ui = SpreadsheetApp.getUi()
  ui.createMenu(SERVICENAME)
    .addItem("Menu de opções", "showMenu")
    .addToUi()
}