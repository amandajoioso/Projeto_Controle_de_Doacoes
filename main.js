/**
  * Nome do serviço
  */
const SERVICENAME = 'Iniciar'

function onOpen(e) {
  /**
    * Cria o Menu "Catálogo de Produtos"
    */
  let ui = SpreadsheetApp.getUi()
  ui.createMenu(SERVICENAME)
    .addItem("Catálogo de Produtos", "showMenu")
    .addItem("Planilha de Registro", "showMenuRegistro") 
    .addItem("Gestão de Campanhas", "showMenuCampanha") 
    .addToUi()
}