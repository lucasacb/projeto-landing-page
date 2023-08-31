 var Leonardo = window.document.getElementById("Leonardo")
 var Samantha = window.document.getElementById("Samantha")
 var Bruna = window.document.getElementById("Bruna")
 var SetaDireita = window.document.getElementById("setadireita")
 var SetaEsquerda = window.document.getElementById("setaesquerda")

 function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:55px"
 }

 function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex; margin-top:55px"
    SetaEsquerda.style = "display:none"
 }



