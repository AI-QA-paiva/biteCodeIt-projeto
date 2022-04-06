function maior_menor() {
    var dadoA = Number(document.getElementById('n1').value);
    var dadoB = Number(document.getElementById('n2').value);
    // var dadoC = Number(document.getElementById('n3').value);

    if (dadoA>dadoB){
        document.getElementById('resp').innerHTML = `Maior é: ${dadoA}`
    }else if (dadoB>dadoA)
    document.getElementById('resp').innerHTML = `Maior é: ${dadoB}`

}
