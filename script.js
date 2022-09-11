function Chutar(){
    var numeroSecreto = parseInt(Math.random() * 11);

    var numeroDoChute = parseInt(document.getElementById("numero-do-chute").value);
    var resultadoDoChute = document.getElementById("resultado-do-chute");

    if (numeroDoChute == numeroSecreto){
        resultadoDoChute.innerHTML = "Parabéns, você <p id='aviso-acertou'>ACERTOU!</p>";
    } else if (numeroDoChute > 10 || numeroDoChute < 0) {
        resultadoDoChute.innerHTML = "<p id='aviso-numeros-aceitos'>Insira um número de 0 a 10.</p>";
    } else {
        resultadoDoChute.innerHTML = "Que pena, você <p id='aviso-errou'>ERROU!</p><br>O número secreto era " + numeroSecreto + ".";
    }
}