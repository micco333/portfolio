// JavaScript Document

/*pageTopへ戻る*/
/*$(".btn-pageTop>a").on("click",function(){
    $("html,body").animate({scrollTop:0},1000);
});*/


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


/*content02の画像3枚*/
var scrollAnimationElm = document.querySelectorAll('.point_i');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.sa_margin != null) {
      triggerMargin = parseInt(elm.dataset.sa_margin);
    }
    if(elm.dataset.sa_trigger) {
      showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset.sa_delay)? elm.dataset.sa_delay : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


/*ラインマーカー*/
$(window).scroll(function (){
 $(".line_marker").each(function(){
   var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
   var scroll = $(window).scrollTop(); //スクロールの位置を取得
   var windowHeight = $(window).height(); //ウインドウの高さを取得
   if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
     $(this).addClass('active'); //クラス「active」を与える
   }
 });
});




