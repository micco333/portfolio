// JavaScript Document
/*-------------------------
adobeフォント
--------------------------*/
  (function(d) {
    var config = {
      kitId: 'zve7bzc',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


/*-------------------------
モバイルの時のボタン
--------------------------*/
/*
$(".btn-trigger").on("touchstart",function(){
    $(this).toggleClass("active");
    $(".header-nav").fadeToggle(500);
});
*/

/*-------------------------
topへ戻る
--------------------------*/
$(function() {
    var topBtn = $('.btn-pageTop>a');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

/*-------------------------
スクロールして途中で固定
（トップページのみ）
(animationはCSSで定義してJSで発火)
--------------------------*/
 $(window).on("load scroll",function(){
    let $main = $("#main"),
        $homeHeader = $(".home .header"),
        $distance = $main.offset().top,
        $scrollVal = $(window).scrollTop(),
        $navH = $(".header").outerHeight();
	
	console.log($distance);
	console.log($scrollVal);
	
    if($scrollVal>$distance){
        $homeHeader.addClass("fix");
        $main.css("margin-top",$navH);
    }else{
        $homeHeader.removeClass("fix");
        $main.css("margin-top",0); 
    }
}); 


