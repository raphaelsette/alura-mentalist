function Chutar(){
    var numeroSecreto = parseInt(Math.random() * 11);

    var numeroDoChute = parseInt(document.getElementById("numero-do-chute").value);
    var resultadoDoChute = document.getElementById("resultado-do-chute");

    if(!numeroDoChute) {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu de digitar um número!'});
    } else {
        if (numeroDoChute == numeroSecreto){
            resultadoDoChute.innerHTML = "Parabéns, você <p id='aviso-acertou'>ACERTOU!</p><br>Eu pensei no número " + numeroSecreto + ".";
        } else if (numeroDoChute > 10 || numeroDoChute < 0) {
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Só é permitido números de 0 a 10!'});
        } else {
            resultadoDoChute.innerHTML = "Que pena, você <p id='aviso-errou'>ERROU!</p><br>Eu pensei no número " + numeroSecreto + ".";
        }
    }
}