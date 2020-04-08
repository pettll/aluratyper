//VARIÁVEIS GLOBAIS
$("#tempo-digitacao").text("5"); // tempo para escrever
//frase para digitar
$(".frase").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


//chamada de funções
$(function(){
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  reiniciarJogo();
  $("#botao-reiniciar").click(reiniciarJogo);
});


//FUNÇÕES
//contador de palavras do texto principal
function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numeroPalavras);
}

//contador de palavras do campo de digitação
function inicializaContadores() {
  campo.on("input", function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

//cronometro
function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function(){
    var cronometroID = setInterval(function(){
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
      }
    },1000)
  });
}

// reiniciar jogo
function reiniciarJogo(){
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
}
