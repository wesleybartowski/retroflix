// function startTimer(duration, display){

//     var timer = duration, minutes, seconds;

//     setInterval(function(){

//         minutes = parseInt(timer / 15,00);
//         seconds = parseInt(timer % 60,10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if(--timer < 0){
            
//             window.location.href = 'index.html';
//         }

//     }, 1000);
// }

//  function relogio(){

//     var duration = 60 * 4; // conversao para segundos 
//     var display = document.querySelector("#timer"); // elemento para exibir o timer

//     startTimer(duration, display); // inicia a função 


// }







var tempo = new Number();
  // Tempo em segundos
  tempo = 900;

  function startCountdown(){

    // Se o tempo não for zerado
    if((tempo - 1) >= 0){

      // Pega a parte inteira dos minutos
      var min = parseInt(tempo/60);
      // Calcula os segundos restantes
      var seg = tempo%60;

      // Formata o número menor que dez, ex: 08, 07, ...
      if(min < 10){
        min = "0"+min;
        min = min.substr(0, 2);
      }
      if(seg <=9){
        seg = "0"+seg;
      }
      
      // Cria a variável para formatar no estilo hora/cronômetro
      horaImprimivel = '00:' + min + ':' + seg;
      //JQuery pra setar o valor
      $("#sessao").html(horaImprimivel);

      // Define que a função será executada novamente em 1000ms = 1 segundo
      setTimeout('startCountdown()',1000);
      

      // diminui o tempo
      tempo--;
      
      

      // Quando o contador chegar a zero faz esta ação
    } else {
    //   window.open('../controllers/logout.php', '_self');
    window.location.replace("index.html");
    }

  }

  // Chama a função ao carregar a tela
  
