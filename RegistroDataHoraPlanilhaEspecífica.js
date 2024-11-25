function onEdit(e) {
  // Nome da aba onde o script deve funcionar
  var abaAlvo = "Planilha de Registro"; 
  
  // Obtém informações da edição
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  
  // Verifica se a aba ativa é a aba correta
  if (sheet.getName() !== abaAlvo) {
    return; // Sai do script se não estiver na aba específica
  }
  
  // Configurações das colunas
  var colProdutos = 2; // Número da coluna onde os produtos são cadastrados (ex.: coluna B)
  var colDataHora = 3; // Número da coluna onde a data/hora será registrada (ex.: coluna C)
  
  // Verifica se a edição foi na coluna de produtos e a célula não está vazia
  if (range.getColumn() == colProdutos && range.getValue() !== "") {
    // Insere a data e hora na coluna de registro correspondente
    sheet.getRange(range.getRow(), colDataHora).setValue(new Date());
  }
}
