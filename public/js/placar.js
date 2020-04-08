//Chama a função mostrar placar ao clicar no botão
$("#botao-placar").click(mostrarPlacar);

//FUnção para inserir e mostrar placar do jogo
function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Pet";
  var numPalavras = $("#contador-palavras").text();
  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);
  corpoTabela.prepend(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}


//Função para descer o body até o heading do placar
function scrollPlacar(){
  var posicaoPlacar = $(".placar").offset().top;
  $("html, body").animate({
    scrollTop: posicaoPlacar+"px"
  },1000);
}

//criar novas linhas de placar como objetos
function novaLinha(usuario, palavras){
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href","#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}


//remover linhas
function removeLinha(){
  $(".botao-remover").click(function(event){
    event.preventDefault();
    var linhas =  $(this).parent().parent()
    linhas.fadeOut();
    setTimeout(function(){
      linhas.remove();
    },1000);
  });
}


//Mostrar e esconder o placar
function mostrarPlacar(){
  $(".placar").stop().slideToggle(600);
}
