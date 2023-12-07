let nameJogador = document.querySelector("#inName")
let numDerrotas = document.querySelector("#inDerrotas")
let numViTorias = document.querySelector("#inVitorias")
let CalculaRancker = document.querySelector("#inCalcular")
let Name = document.querySelector("h3")
let numeName = document.querySelector("h4")
let rancking = Number(numDerrotas.value) + Number(numViTorias.value);
function CalculaRancke(){
 
   let nameExibir = nameJogador.value;
   let numberExibir = Number(numDerrotas.value);
  let vitoriExiber = Number(numViTorias.value);
 Name.textContent = " Nome do Jogador: " + nameExibir;
  rancking = Number(numDerrotas.value) + Number(numViTorias.value);
   
 if(vitoriExiber <= 10){

  numeName.textContent = " Heroi tem saldo de  " + vitoriExiber + "  vitórias e " + numberExibir + " Derrotas e  esta no nível ferro :" + " Total de Derrotas e vitórias " + rancking ;  
    }
    if(vitoriExiber >= 11 && vitoriExiber <= 20 ){
      numeName.textContent = " Heroi tem saldo de " + vitoriExiber +  "vitórias e "  + numberExibir + " Derrotas e  esta no nível bronze :" + " Total de Derrotas e vitórias " + rancking;  
    }
    if(vitoriExiber >= 21 && vitoriExiber <= 50 ){
      numeName.textContent = " Heroi tem saldo de " + vitoriExiber + " vitórias e " + numberExibir + " Derrotas e  esta no nível Prata :" +  " Total de Derrotas e vitórias " + rancking ;  
    }
    if(vitoriExiber >= 51 && vitoriExiber <= 80 ){
      numeName.textContent = " Heroi tem saldo de " + vitoriExiber + " vitórias e " + numberExibir + " Derrotas e  esta no nível Ouro :" +  " Total de Derrotas e vitórias " + rancking  ;  
    }
    if(vitoriExiber >= 81 && vitoriExiber <= 90 ){
      numeName.textContent = " Heroi tem saldo de " + vitoriExiber + " vitórias e " + numberExibir + " Derrotas e  esta no nível Diamante :" +  " Total de Derrotas e vitórias " + rancking  ;  
    }
}
CalculaRancker.addEventListener("click",CalculaRancke )

