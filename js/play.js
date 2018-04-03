
$(function(){
    audio = document.getElementById("audio");
    
    $(".palybtn").toggle(
      function(){
        audio.play();
        $(this).attr("src","img/pause.png");
     },
     function(){
      audio.pause();
      $(this).attr("src","img/play.png");
     }
    )
  
  });
  