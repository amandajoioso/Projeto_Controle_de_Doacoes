function Estilo() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('C2:F4').activate();
  spreadsheet.getActiveRangeList().setFontFamily('Comfortaa')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('C7:D7').activate();
  spreadsheet.getActiveRangeList().setFontFamily('Comfortaa')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('C9').activate();
  spreadsheet.getActiveRangeList().setFontFamily('Comfortaa')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('C11:C13').activate();
  spreadsheet.getActiveRangeList().setFontFamily('Comfortaa')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('C17:D17').activate();
  spreadsheet.getActiveRangeList().setFontFamily('Comfortaa')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('C19:C21').activate();
  spreadsheet.getActiveRangeList().setVerticalAlignment('middle')
  .setFontFamily('Comfortaa');
  spreadsheet.getRange('C25:D25').activate();
  spreadsheet.getActiveRangeList().setVerticalAlignment('middle')
  .setFontFamily('Comfortaa');
  spreadsheet.getRange('C27:C30').activate();
  spreadsheet.getActiveRangeList().setVerticalAlignment('middle')
  .setFontFamily('Comfortaa');
  spreadsheet.getRange('I2:J4').activate();
  spreadsheet.getActiveRangeList().setVerticalAlignment('middle')
  .setFontFamily('Comfortaa');
};