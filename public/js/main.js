//VARIÁVEIS GLOBAIS
//$("#tempo-digitacao").text("5"); // tempo para escrever
//frase para digitar
//$(".frase").text("Duas.")
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//chamada de funções
$(function(){
  atualizaTamanhoFrase();
  atualizaTempoInicial();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
//  finalizaJogo();
//  inserePlacar();
//  reiniciarJogo();
//  novaLinha();
  $("#botao-reiniciar").click(reiniciarJogo);
  atualizaPlacar();
  $("#usuarios").selectize({
    create: true,
    sortField: 'text'
  });
  $(".tooltip").tooltipster({
    trigger: "custom"
  });
});


//FUNÇÕES
//atualizar a duração do tempo
function atualizaTempoInicial(tempo) {
  tempoInicial = tempo;
$("#tempo-digitacao").text(tempo);
}


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
  campo.one("focus", function(){
    var tempoRestante = $("#tempo-digitacao").text();
    $("#botao-reiniciar").addClass("disabled");
    var cronometroID = setInterval(function(){
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    },1000)
  });
}

//Ações ao finalizar o jogo
function finalizaJogo(){
  campo.attr("disabled", true);
  $("#botao-reiniciar").removeClass("disabled");
  campo.addClass("campo-desativado");
  inserePlacar();
}


//Marcador de certo e errado
function inicializaMarcadores() {
  campo.on("input", function(){
    var frase = $(".frase").text();
    var digitado = campo.val();
    if (frase.startsWith(digitado)) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}


// reiniciar jogo
function reiniciarJogo(){
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  campo.removeClass("campo-desativado");
  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
  inicializaCronometro();
}
