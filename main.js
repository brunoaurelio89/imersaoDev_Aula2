var operacao = prompt('Digite a Operação que deseja fazer:  1 para Adição / 2 para Subtração / 3 para Multiplicação /  4 para Divisão');
var valor1 = parseInt(prompt('Informe o Primeiro Valor'));
var valor2 = parseInt(prompt('Informe o Segundo Valor'));
var resultado = 0;

if (operacao == 1) {
  var resultado = (valor1 + valor2).toFixed(2);
    document.write('<h2>' + valor1 + ' + ' + valor2 + ' = '+ resultado + '</h2>');
} 
  else if (operacao == 2) {
    var resultado = (valor1 - valor2).toFixed(2);
    document.write('<h2>' + valor1 + ' - ' + valor2 + ' = ' + resultado + '</h2>');
}
  else if (operacao == 3) {
    var resultado = (valor1 * valor2).toFixed(2);
    document.write('<h2>' + valor1 + ' X ' + valor2 + ' = ' + resultado + '</h2>');
} 
  else if (operacao == 4){
    var resultado = (valor1 / valor2).toFixed(2);
    document.write('<h2>' + valor1 + ' / ' + valor2 + ' = ' + resultado + '</h2>');
}
  else {
    document.write('<h2>Inserir Números!</h2>');
}
