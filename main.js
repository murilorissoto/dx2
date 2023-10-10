function MudaDesenho() {
    var notadoalunofoda = 0;
    var alunofoda = "";
  
    const texto = document.querySelector("h2f");
    while (true) {
      var nalu = prompt("Digite o nome do aluno (ou digite 'fim' para encerrar):");
  
      if (nalu.toLowerCase() === "fim") {
        break;
      }
      else {
        var noalu = parseInt(prompt(`Digite a nota de ${nalu}:`));
        if (noalu > notadoalunofoda) {
          notadoalunofoda = noalu;
          alunofoda = nalu;
        }
        texto.innerHTML = (`O aluno com a maior nota é ${alunofoda} com a nota ${notadoalunofoda}.`);
  
      }
  
    }
  
  
  }

  function musica() {
    //qnt de músicas
    var Num = document.querySelector('#No').value;
    var maistocada = 0;
    var N = Num;
    var qntRep;

    //vezes que a música foi tocada
    while (N >= 1) {
    
        qntRep = parseInt(prompt("Informe quantas vezes cada música foram tocadas"));

        if (qntRep > maistocada) {
            maistocada = qntRep;
            
        }
        N=N-1;

    }
    alert(`a música mais tocada tocou ${maistocada}!`)
}

  