
$(function(){
    // 获取audio
    audio = document.getElementById("audio");
    // 播放
    $(".palybtn,.pausebtn").click(
      function(){
        play();      
     }
    )
    // 暂停
    $(".pausebtn").click(
      function(){
        pause();      
     }
    )
    // 播放时换图片
    function play(){
      audio.play();
      $(".palybtn").css("display","none");
      $(".pausebtn").css("display","block");
    }
    // 暂停时换图片
    function pause(){
      audio.pause();
      $(".pausebtn").css("display","none");
      $(".palybtn").css("display","block");
    }
  
    $(".playgo").on("click", function(){
      $("#audio").attr("src","img/张学友 - 李香兰.mp3");
      $(".sing").text("李香兰");
      $(".singer").text("张学友");
      play();
    });
  
  });