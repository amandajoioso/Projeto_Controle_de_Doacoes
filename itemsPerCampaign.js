function updateCampaignItems() {
  // Abra a planilha ativa
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Obtenha as folhas necessárias
  const registrosSheet = spreadsheet.getSheetByName("Planilha de Registro");
  const campanhasSheet = spreadsheet.getSheetByName("Planilha de Campanhas");

  if (!registrosSheet || !campanhasSheet) {
    throw new Error(
      "Certifique-se de que as planilhas 'Planilha de Registro' e 'Planilha de Campanhas' existam."
    );
  }

  // Obtenha os dados das planilhas
  const registrosData = registrosSheet.getDataRange().getValues(); // Dados da planilha de registro
  const campanhasData = campanhasSheet.getDataRange().getValues(); // Dados da planilha de campanhas

  // Mapear campanhas (ID -> Total de Itens)
  const campaignTotals = {};

  // Iterar sobre os registros e acumular itens por campanha
  registrosData.slice(1).forEach((row) => {
    const campaignId = row[3]; // Coluna "ID da Campanha" (D)
    const itemCount = row[1]; // Coluna "Quantidade" (B)

    if (campaignId && itemCount) {
      campaignTotals[campaignId] =
        (campaignTotals[campaignId] || 0) + itemCount;
    }
  });

  // Atualizar os totais na coluna "Quantidade de itens arrecadados" da planilha de campanhas
  campanhasData.slice(1).forEach((row, index) => {
    const campaignId = row[0]; // Coluna "ID" na planilha de campanhas (A)
    if (campaignId && campaignTotals[campaignId] !== undefined) {
      campanhasSheet
        .getRange(index + 2, 4)
        .setValue(campaignTotals[campaignId]); // Atualiza a coluna "Quantidade de itens arrecadados" (D)
    }
  });
}
