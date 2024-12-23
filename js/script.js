// JavaScript Document

/*adobe フォント*/
(function(d) {
var config = {
  kitId: 'zve7bzc',
  scriptTimeout: 3000,
  async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);



/*トップへ戻る*/
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



/*時間差スクロール*/
$(function() {
    $(window).scroll(function(){
        var y = $(this).scrollTop(); // スクロール値を取得（=Y座標=縦位置）
        $('#bg01').css('background-position', '0 ' + parseInt( -y / 20 ) + 'px'); // 1/50のスピード
       /* $('.h2').css('background-position', '0 ' + parseInt( -y / 10 ) + 'px');*/ // 1/10のスピード
    });
});



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



/*slide*/
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});



/*ナビゲーションに現在地を表示する*/
function onePageNav( switchName ) {
// 変数設定
    const navSwitch = $(switchName);
    const deductHeight = 60;//ここに設定した数字を引いた位置にスクロールした時点で切り替わる
    let navArr = [];
 
// ナビゲーションに設定したクラスのリンク先idを取得して、それぞれのid名とtop offsetの値を配列に追加します
    navSwitch.each(function(i){
      let navSwitchHref = $(this).attr('href');
      let tgtOff = $(navSwitchHref).offset().top - deductHeight;
      navArr.push([]);
      navArr[i].switch = $(this);
      navArr[i].tgtOff = tgtOff;
    });
 
// スクロールするたびに、どのナビゲーションのリンク先にいるか判別して、.is-currentクラスを切り替える
    $(window).scroll(function () {
      for( let i = 0; i < navArr.length; i++ ){
        let scroll = $(window).scrollTop();
        let tgtKey = navArr[i];
        let tgtSwitch = tgtKey.switch;
        let tgtOff = tgtKey.tgtOff;
        if ( scroll > tgtOff ) {
          navSwitch.removeClass('is-current');
          tgtSwitch.addClass('is-current');
        } else {
          tgtSwitch.removeClass('is-current');
        }
      }
    });
  }
  $(window).on('load resize',function(){
 // リサイズのたびにターゲットのtop offsetが変わるので、loadとresizeごとに実行する
    onePageNav('.js-curnav-switch');//ここでナビゲーションリンクのクラスを指定する。
  });


