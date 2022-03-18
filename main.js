$(function(){
  $('.hamburger').on('click', function(){
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  $('#mask').on('click', function(){
    $('#header').removeClass('open');
  });
  $('#navi a').on('click', function(){
    $('#header').removeClass('open');
  });
  let pagetop = $('#to-top');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 700){
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  // let pagetop = $('#to-top');
  // // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  // pagetop.hide();
  // // スクロールイベント（スクロールされた際に実行）
  // $(window).scroll(function() {
  //   // スクロール位置が700pxを超えた場合
  //   if ($(this).scrollTop() > 700) {
  //     // トップに戻るボタンを表示する
  //     pagetop.fadeIn();
  //   // スクロール位置が700px未満の場合
  //   } else {
  //     // トップに戻るボタンを非表示にする
  //     pagetop.fadeOut();
  //   }
  // });
  pagetop.click(function(){
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });
});
