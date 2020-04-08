//FUnção para inserir placar do jogo
function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Pet";
  var numPalavras = $("#contador-palavras").text();
  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);
  corpoTabela.prepend(linha);
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
    $(this).parent().parent().remove();
  });
}
