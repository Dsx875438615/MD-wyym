$(function(){
  // 获取audio
  var audio = document.getElementById("audio");
  var timeing = document.querySelector(".timeing");
  var jinduwrap = document.querySelector(".jinduwrap");
  var jinduIng = document.querySelector(".jinduIng");
  var time = document.querySelector(".time");
  var palybtn = document.querySelector(".palybtn");
  var pausebtn = document.querySelector(".pausebtn");
  var pageplay = document.querySelector(".pagePlay");
  var footerplay = document.querySelector(".play");
  

  var audioPlay = {
    init:function(){
      var that = this;
      //removeAttribute() 方法删除指定的属性   controls 如果出现该属性，则向用户显示控件，比如播放按钮。
      audio.removeAttribute("controls");
      audioPlay.playEvent();
    },
    playEvent:function(){
      pageplay.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "svg"){
          if(onoff){
            play();
          }else{
            pause();
          }
        }
      },
      footerplay.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "svg"){
          if(onoff){
            play();
          }else{
            pause();
          }
        }
      }
    }







  }

  audioPlay.init();

  
    


  // 播放
  var onoff = true;

 

  // 播放 播放时换图片
  function play(){
    audio.play();
    $(".palybtn").css("display","none");
    $(".pausebtn").css("display","block");
    onoff = false;
    time.innerHTML = formatTime(audio.duration.toFixed(0));
    jinduFlag = setInterval(getJindu,60);
  }
  // 暂停 暂停时换图片
  function pause(){
    audio.pause();
    $(".pausebtn").css("display","none");
    $(".palybtn").css("display","block");
    onoff = true;
    clearInterval(jinduFlag);
  }

  // $(".playgo").on("click", function(){
  //   $("#audio").attr("src","img/张学友 - 李香兰.mp3");
  //   $(".sing").text("李香兰");
  //   $(".singer").text("张学友");
  //   play();
  // });

  //已经进行的进度
  //duration	返回音频的长度（以秒计）
  //currentTime	设置或返回音频中的当前播放位置（以秒计）
  // //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
  function getJindu(){
    //当前百分比=当前位置/总长度
    var baifen = audio.currentTime/audio.duration;
    var jinduWidth = parseInt(getStyle(jinduwrap,'width'))
    jinduIng.style.width = baifen * 50+'rem';
    timeing.innerHTML = formatTime(audio.currentTime.toFixed(0));
    
  }


  /*
* 将秒数格式化时间
* @param {Number} seconds: 整数类型的秒数
* @return {String} time: 格式化之后的时间
* console.log(formatTime(182));   // 03:02
*/ 
function formatTime(seconds) {
  var min = Math.floor(seconds / 60),
      second = seconds % 60,
      hour, newMin, time;
    if (min > 60) {
      hour = Math.floor(min / 60);
      newMin = min % 60;
    }
    if (second < 10) { second = '0' + second;}
    if (min < 10) { min = '0' + min;}
    return time = hour? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
}

/* 
  将获取的宽度转换成整数值
  oDiv.style.width = parseInt(getStyle(oDiv,'width')) - 1 +'px';　　　　　　//
*/
function getStyle(obj, attr) {  ////两个参数，第一个是获取谁的，第二个是什么样式
 if (obj.currentStyle) {//IE
  return obj.currentStyle[attr];  ////写多个主要是为了浏览器兼容性问题
 } else {
  return getComputedStyle(obj, false)[attr];  ////里面有两个参数，第一个是获取谁的，第二个参数不为空就行，后面是获取样式
 }
}

// 原生的JavaScript事件绑定函数
function bindEvent(ele, eventName, func){
  if(window.addEventListener){
      ele.addEventListener(eventName, func);
  }
  else{
      ele.attachEvent('on' + eventName, func);
  }
}






});
