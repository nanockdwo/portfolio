$(function () {

  var $mnu = $(".gnb a");
  var mnuIdx = 0

  var $indicator = $(".slide-pagination a");
  var $container = $(".slide-container");
  var $btnPrev = $(".slide-prev");
  var $btnNext = $(".slide-next");
  var nowIdx = 0;

  var $charMnu = $("section>.cont1>ul>li>a");
  var $charMnus = $("section>.cont1>ul>li>ul");
  var charIdx = 0;

  var arrTopVal = [];

  $(".cont").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top - 200;
  });

  // 스크롤 함수
  function pageAni(topVal) {

    $("html,body").stop().animate({
      scrollTop: topVal
    });

  }

  // 슬라이드 이동 함수
  function moveFn() {
    $indicator.eq(nowIdx).parent().addClass("on")
      .siblings().removeClass("on");


    $container.stop().animate({
      left: -1400 * nowIdx
    });
  }
  // 스크롤부분
  $mnu.on("click", function (evt) {
    evt.preventDefault();

    mnuIdx = $mnu.index(this);

    pageAni(arrTopVal[mnuIdx]);
  });

  $(window).on("load", function () {
    pageAni(arrTopVal[mnuIdx]);


  });

  $(window).on("scroll", function () {

    var scrollTop = $(window).scrollTop();

    for (var i = 0; i < 4; i++) {
      if (scrollTop >= arrTopVal[i]) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      }
    }

  });
  // ------------------------------------------------------------------------------

  // 슬라이드부분
  $indicator.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    moveFn();

  });



  $btnPrev.on("click", function () {
    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 2;
    }

    moveFn();
  });


  $btnNext.on("click", function () {
    if (nowIdx < 2) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }


    moveFn();
  });

  setInterval(function () {
    if (nowIdx < 2) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }
    moveFn();
  }, 2000);
  // ---------------------------------------------------------------------------------
  // 캐릭터 소개부분

  $charMnu.on("click", function (evt) {
    evt.preventDefault();
    if ($(this).next().css('display') == 'none') {
      $charMnus.slideUp();
      $(this).next().slideDown();
    };
  });
  // 귀검(남))
  $("section>.cont1>ul>li:first-child>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/72JySUuBnD4?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:first-child>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/aDmaxXseMSQ"
    });
  });
  $("section>.cont1>ul>li:first-child>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/eI9ExXcesjc?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:first-child>ul>li:nth-child(4)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/r3kt7O-ny7I?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:first-child>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/20ztAX_xAIM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 귀검(여))
  $("section>.cont1>ul>li:nth-child(2)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/cmdFehTrlh0?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(2)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/MEdmuVoJ4lA?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(2)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Xtq-nrOS0dA?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(2)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/dwPUbpQZnEQ?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 격투가(여)
  $("section>.cont1>ul>li:nth-child(3)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/AZR7T4DzcMw?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(3)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/o6cmz5C7FCc?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(3)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/5VyFUdPsYhU?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(3)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Xi6Qwx1tJaE?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 격투가(남)
  $("section>.cont1>ul>li:nth-child(4)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/dh6lFJCyuJg?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(4)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/UO81GJH_9Bs?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(4)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/J_O7gpfWOCs?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(4)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/pTiethsF-HM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 거너(여)
  $("section>.cont1>ul>li:nth-child(5)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/9dUX-pkG5h0?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(5)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ME150hbanjU?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(5)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/zFWMIPGfM8s?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(5)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ld4SbKU78H8?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 거너(남)
  $("section>.cont1>ul>li:nth-child(6)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/9M3ypihe9zE?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(6)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/GYwlPFSyXgs?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(6)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/2Vv2v9Ww1c4?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(6)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/sTpn1L3I8Xw?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 프리(남)
  $("section>.cont1>ul>li:nth-child(7)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/cCoFEDIPAr4?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(7)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ULG4W7XQQqM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(7)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/DjZT_LO6q94?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(7)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ecRVIFXY2Hk?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 프리(여)
  $("section>.cont1>ul>li:nth-child(8)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/xJm42BGRwl4?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(8)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/nvFSFWTD4Cc?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(8)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ZJdzvRT7uVw?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(8)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/MVoeYHEFnWo?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 마법사(여)
  $("section>.cont1>ul>li:nth-child(9)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/N8xkkmSFwHQ?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(9)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Jjz-JrzlKeM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(9)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/bJz4NctQBVI?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(9)>ul>li:nth-child(4)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/vB4GynH56JI?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(9)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Sm92KFRswXo?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 마법사(남)
  $("section>.cont1>ul>li:nth-child(10)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/bhEiWVeQ9-A?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(10)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/TGzpfmHntCA?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(10)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/vyvAMENp5Ec?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(10)>ul>li:nth-child(4)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/B-_hRbHCMFM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(10)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/2fm7QlqipHU?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 도적
  $("section>.cont1>ul>li:nth-child(11)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/3I6d4upgkHo?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(11)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/xi6I-cTEl2U?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(11)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/kYbZPW5vBU4?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(11)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/_nn0nYEtrTU?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 나이트
  $("section>.cont1>ul>li:nth-child(12)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Gfa0rczNlQA?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(12)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/wUeipnnnrwo?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(12)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/Aw3jZ_TyR9o?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(12)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/CNHyM5t_1Ws?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 마창
  $("section>.cont1>ul>li:nth-child(13)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/MGL-u4aH1pM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(13)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/ZMoIuu7K4VI?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(13)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/BqOV3xK_Dso?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(13)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/UEA5c14-Y2o?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 총검
  $("section>.cont1>ul>li:nth-child(14)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/1lYulMtIZtM?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(14)>ul>li:nth-child(2)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/csu7KPFi_2o?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(14)>ul>li:nth-child(3)").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/9vJF6-04gpg?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  $("section>.cont1>ul>li:nth-child(14)>ul>li:last-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/FURz4NJvY3s?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 다크나이트
  $("section>.cont1>ul>li:nth-child(15)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/SmWlmAsEXWI?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // 크리에이터
  $("section>.cont1>ul>li:nth-child(16)>ul>li:first-child").on("click", function (evt) {
    evt.preventDefault();
    $(".video-container>iframe").attr({
      src: "https://www.youtube.com/embed/3AmBCd8Hgac?list=PL3Ba5hbGwXLwew553mq2ggeMLvDYDsfwB"
    });
  });
  // ------------------------------------------------------------------
  // 사도 소개
  $("section>.cont2>ul>li:first-child>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_kain.jpg)"
    });
    $("section>.cont2>.text").text("거인들의 행성 '그랑블라드' 에서 내려온 수수께끼의 존재로 그에게 주어진 호칭은 테라 창신세기의 죽음이 두려워하는 자. 불멸자라 칭해지기도 한다. 강자 지존인 마계에서도 가장 강력한 왕으로, 브룩클린 동쪽의 마을 유니언 스퀘어에 거주하고 있다. 그의 체력과 힘은 어떤 물질과 속임수[2]로도 파괴할 수 없을 정도로 극강 그 자체라고 하며, 마계에 이름난 강한 생명체들이 모두 카인에게 덤볐으나 아무도 이기지 못했다고 한다. 같은 사도인 카시야스도 패배했고,[3] 바칼은 싸울 엄두조차 내지 못했다.")
  });
  $("section>.cont2>ul>li:nth-child(2)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_hilder.jpg)"
    });
    $("section>.cont2>.text").text("아름다웠던 세계, 테라의 멸망과 가족의 죽음을 기억하고 있다. 마계에서 아주 오랫동안 살아남아 왔으며 자연의 힘을 이용하여 '마법'을 운용하는 방법을 최초로 발견하였다고 전해진다. 마계에서 일어나는 일들에 깊이 연관되어 있으며 마계를 예전의 모습으로 돌려놓기 위해 수많은 세월 동안 부단히 노력해왔다. 마법사로서 해로운 환경으로부터 자신을 보호할 수 있는 능력과 정신감응 능력을 갖추고 있어 사도들을 하나로 묶는 역할을 하며 분쟁을 조정하고 뜻을 규합하기도 한다.")
  });
  $("section>.cont2>ul>li:nth-child(3)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_isys.jpg)"
    });
    $("section>.cont2>.text").text("카인을 시작으로 마계에 올라탄 두번째 사도. 금빛 행성 테이베르스에서 찾아온 존재로, 자신의 행성에 생긴 문제를 해결하기 위해 일시적으로 마계에 올라탔으나, 직후 테이베르스가 마계와 멀어져버리면서 돌아가지 못하고 그대로 눌러앉아 지내다가 제 3사도로 선발되었다.")
  });
  $("section>.cont2>ul>li:nth-child(4)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_kasiys.jpg)"
    });
    $("section>.cont2>.text").text("전투를 위해 살아가는 호전적인 종족인 귀면족의 일원으로 더 강한 상대를 찾아서 행성 '에컨'에서 마계로 뛰어올랐다고 한다. 마계가 이탈한 후에도 항상 새로운 세계와 적을 기대하며 살고 있는 마계 유일의 낙천주의자. 인간에 비하면 몸이 1.5배 정도 크고 두 자루의 검을 사용하며 에컨에서는 이미 그와 대적할 자가 없다고 한다. 더욱 더 강해지기 위해 소환사 케이트와 계약을 맺으면서 그녀의 제자들이 위험한 순간에 분신으로서 강림하게 되고 이후 아라드의 검사들과 서로 영향을 주고 받았다.")
  });
  $("section>.cont2>ul>li:nth-child(5)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_siroko.jpg)"
    });
    $("section>.cont2>.text").text("무형의 시로코. 수 백의 얼굴을 가졌으되 보이지 않는 자. - (오리진 이전)록시에게 사망. (오리진 이후) 4인의 웨펀마스터에게 사망. 힘이 닿는 곳에서는 어떤 물질로도 변할 수 있는 변이세계 '주알라바돈'에서 마계에 올라탄 사도이다. 따뜻한 온도에서만 원활하게 움직일 수 있기 때문에 마계에서는 퀸즈 동쪽에 있는 메트로센터에서 거주. 비슷한 이유로 에너지를 놓고 안톤과는 끊임없이 싸우는 사이였다.")
  });
  $("section>.cont2>ul>li:nth-child(6)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_diregie.jpg)"
    });
    $("section>.cont2>.text").text("검은 질병의 디레지에. 더러운 피를 흘리는 자. - 노스마이어로 전이되어 차원의 틈으로 빨려들어가 온 몸이 갈갈이 찢겨 나가 소멸. 사도 중에서 유일하게 불사신으로 세상의 모든 질병들을 가지고 있는 검은 야수이다. 모든 종족에게 치명적인 병원균들로 몸이 이루어져 있으며, 한마디로 살아있는 질병 덩어리라고 생각하면 편하다. 생명체의 세포를 하나하나 먼지로 만들어버리는 치명적인 독기를 풍기며 마계인에게도 질병으로 인한 신체변이와, 액화 등의 재난을 일으켜 왔다.")
  });
  $("section>.cont2>ul>li:nth-child(8)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_roters.png)"
    });
    $("section>.cont2>.text").text("한번에 수천의 무기를 쥘 수 있는 자. - 베히모스로 전이되어 3인의 웨펀마스터들과 제국군, 모험가에게 사망. 해양세계 솔라리스를 지배하다가 마계가 나타나자 마계에 올라탄 사도. 안톤 다음으로 거대한 몸체를 가지고 있으며, 마계의 해양을 지배하고 있었다. 천계의 깨끗한 바다를 보고 놀라움을 금치 못했다는 니우의 말로 보아 마계의 바다는 로터스의 독점으로 인해 오염된 상태였던 것으로 보인다.")
  });
  $("section>.cont2>ul>li:nth-child(7)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_anton.jpg)"
    });
    $("section>.cont2>.text").text("불을 먹는 안톤. 몸을 뻗어 능히 세상 끝에 닿을 수 있는 자. - 파워스테이션에 전이되어 모험가와 천계 토벌군에게 사망. 매우 거대한 행성 '아고르고르'로부터 마계에 올라탄 사도. 외형은 눈이 여러개 달린 거대한 거북. 사도 중 가장 큰 몸집을 가지고 있다. 등에 화산이 있을 정도. 화산은 가루바 화산이라고 이름까지 있는 듯. 마계의 구역 하나를 통째로 차지할 정도의 거체를 자랑하지만 대신 비교적 느리고 둔하다.")
  });
  $("section>.cont2>ul>li:nth-child(9)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_bacal.png)"
    });
    $("section>.cont2>.text").text("용족들의 왕이자 아버지. 폭룡왕이라고 불린다. 바칼이 마계에 올라탔을 때 그의 막강한 능력으로 인정받아 제9사도에 봉해졌으나, 마계를 지배하려는 야욕을 드러내면서 모든 사도를 적으로 돌리게 되었다고 한다. 이에 힐더는 바칼을 사도에서 제명시키고 나머지 사도들과 마계인들의 힘을 모아 바칼과 전쟁을 치르게 되는데 이 전쟁이 바로 '용의 전쟁'이다. 전쟁에서 패한 바칼은 이계로 도망쳐 천계를 독재했으며 아라드에 자신의 용들을 풀어 혼란스럽게 만드는 등, 사악한 짓을 일삼아 왔다. 그러다 결국엔 500년 전, 천계의 기계혁명으로 천계인에게 패하여 사망했다고 전해진다.")
  });
  $("section>.cont2>ul>li:nth-child(10)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_luke.png)"
    });
    $("section>.cont2>.text").text("세 개의 눈과 네 개의 팔을 가진 늙은 인간의 외형을 가진 존재로, 체구가 굉장히 작고 벙어리에다 뛰어난 무력을 가진 것도 아닌, 사도로 칭하기에는 대단히 부족한 듯한 모습을 보인다. 그러나 루크는 이명에서 알 수 있듯이 건설에는 그를 따라올 수 있는 이가 없을 만큼 천재적인 실력을 가지고 있었으며, 항상 본능적으로 무언가를 짓고자 하는 습성을 보이기 때문에 힐더는 그를 발견한 후 그의 건설 능력을 높이 평가하여 엉망이 된 마계를 재건하는 데 이용했다.")
  });
  $("section>.cont2>ul>li:nth-child(11)>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_mikaela.png)"
    });
    $("section>.cont2>.text").text("오즈마의 피의 저주로 멸망의 위기에 처했을 때 계시를 받은 프리스트들을 이끌고 나타났으며, 검은 성전에서 오즈마와 3인의 암흑기사를 봉인함으로서 세상을 구한다. 이후 아라드 곳곳에 교단을 창설하여 더 많은 프리스트들을 양성하도록 하였고, 그 직후 홀연히 사라져버렸다고 한다. 오랜 시간이 지나도 소년의 모습을 하고 있었다고 전해지며, 앞뒤 행적에 비춰봤을 때 그의 정체는 평범한 인간이 아닌 신, 혹은 신의 계시를 받은 천사일 것으로 추측된다.")
  });
  $("section>.cont2>ul>li:last-child>a").on("click", function (evt) {
    evt.preventDefault();
    $("section>.cont2>.screen").css({
      backgroundImage: "url(img/sado_ozma.png)"
    });
    $("section>.cont2>.text").text("'피의 저주'를 일으켜 인간들을 서로 불신하게 만들고 세계 전체에 혼란을 조장한 악마. 과거엔 그 역시 인간이었으나 세상에 원한을 품고 사신과 거래하여 혼돈의 신이 되었다고 한다. 이 피의 저주로 인해 아라드 대륙은 서로에 대한 불신과 내분이 이어진 끝에 하마터면 멸망할 뻔했으나, 어느 날 홀연히 나타난 성안의 미카엘라를 필두로 위장자를 구별할 수 있는 프리스트들이 양성되고 오즈마에 대항하기 시작하면서 결국 오즈마는 검은 성전에서 패배하여 다른 차원에 봉인되고 만다.")
  });
  // --------------------------------------------------------------------------
  // 영상부분
  $("section>.cont3>ul>li:first-child>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/0PyChFozQWc"
    });
    $("section>.cont3>.text").text("'모든 사도를 멸하고 새로운 세계를 창조하여 메시아가 된다'는 힐더의 꾐에 넘어가 마계대전을 일으킨 카쉬파의 수장 사르포자를 막아서는 내용. 결국 사르포자는 차원의틈에 빨려들어 테이베르스로 전이된다. ")
  });
  $("section>.cont3>ul>li:nth-child(2)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/zjr2c5j5HuM"
    });
    $("section>.cont3>.text").text("'마수'란 마계를 떠도는 강력하고 사나운 짐승과 크리쳐들을 총칭하여 부르는 말이다. 이들은 마계 8면 곳곳에서 목격되며, 강대한 힘을 가지고 있으면서도 본능적으로 행동하기 때문에 어떤 면에서는 사도보다도 위험한 존재다. 마수의 출현이 빈번해진 것은 비교적 근래의 일이지만, 마수에 대한 최초의 목격담은 아주 오래된 기록에서도 찾을 수 있다. 민간에서는 마수와 관련된 수많은 전설들이 전해지는데 마계의 주민들은 이 강력한 존재들을 경외하면서도 그 힘의 근원을 탐구하고 싶어한다.")

  });
  $("section>.cont3>ul>li:nth-child(3)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/MSV3fL-ByL8"
    });
    $("section>.cont3>.text").text("핀드워는 지옥파티에 나오는 코스모핀드들의 고향 행성으로 대규모의 코스모핀드가 아라드로 레이드를 온, 말 그대로 전쟁이다. 코스모핀드들은 데 로스 제국의 국경지대에 집결한 뒤 주변 지역에서 활동을 시작하고, 저항해 오는 모험가와| 지역 군대를 압도적인 힘으로 찍어눌렀다. 데 로스 제국은 인근 약소국들의 지원요청을 무시하다 갈 수록 피해가 커지자 뒤늦게 벨마이어 공국과 천계에 지원 요청을 보낸다. 천계에서 온 지원군이 최후의 저지선을 유지하는 사이 공국에서도 노스마이어를 수습하느라 부족한 병력을 보충하기 위해 모험가들을 파견한다.")

  });
  $("section>.cont3>ul>li:nth-child(4)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/d4-Uw1GHiGQ"
    });
    $("section>.cont3>.text").text("제3 사도 이시스-프레이의 고향인 이 아름다운 별은 프레이가 마계로 떠난 후 서서히 그 모습을 잃어가고 있었다.푸른 불의 어머니 루프송은 테이베르스를 원래대로 되돌리려 하나, 별을 검게 물들이는 사악한 힘을 물리치기에는 역부족이었다.남은 동포들을 끌고 악한 힘이 미치지 않는 곳으로 피한 루프송은 언젠가 올 기회를 기다리며 꿋꿋이 버티고 있다. 위대한 이시스-프레이의 고향을 지키기 위해.")

  });
  $("section>.cont3>ul>li:nth-child(5)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/Nofxk4yzzAI"
    });
    $("section>.cont3>.text").text("카인을 시작으로 마계에 올라탄 두번째 사도. 금빛 행성 테이베르스에서 찾아온 존재로, 자신의 행성에 생긴 문제를 해결하기 위해 일시적으로 마계에 올라탔으나, 직후 테이베르스가 마계와 멀어져버리면서 돌아가지 못하고 그대로 눌러앉아 지내다가 제 3사도로 선발되었다.")
  });
  $("section>.cont3>ul>li:nth-child(6)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/u-wfNdMOTgo"
    });
    $("section>.cont3>.text").text("검은 질병의 디레지에. 더러운 피를 흘리는 자. - 노스마이어로 전이되어 차원의 틈으로 빨려들어가 온 몸이 갈갈이 찢겨 나가 소멸. 사도 중에서 유일하게 불사신으로 세상의 모든 질병들을 가지고 있는 검은 야수이다. 모든 종족에게 치명적인 병원균들로 몸이 이루어져 있으며, 한마디로 살아있는 질병 덩어리라고 생각하면 편하다. 생명체의 세포를 하나하나 먼지로 만들어버리는 치명적인 독기를 풍기며 마계인에게도 질병으로 인한 신체변이와, 액화 등의 재난을 일으켜 왔다.")
  });
  $("section>.cont3>ul>li:nth-child(7)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/GLlrp2Zv2bQ"
    });
    $("section>.cont3>.text").text("한번에 수천의 무기를 쥘 수 있는 자. - 베히모스로 전이되어 3인의 웨펀마스터들과 제국군, 모험가에게 사망. 해양세계 솔라리스를 지배하다가 마계가 나타나자 마계에 올라탄 사도. 안톤 다음으로 거대한 몸체를 가지고 있으며, 마계의 해양을 지배하고 있었다. 천계의 깨끗한 바다를 보고 놀라움을 금치 못했다는 니우의 말로 보아 마계의 바다는 로터스의 독점으로 인해 오염된 상태였던 것으로 보인다.")
  });
  $("section>.cont3>ul>li:nth-child(8)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/I4rdCm1ytHQ"
    });
    $("section>.cont3>.text").text("불을 먹는 안톤. 몸을 뻗어 능히 세상 끝에 닿을 수 있는 자. - 파워스테이션에 전이되어 모험가와 천계 토벌군에게 사망. 매우 거대한 행성 '아고르고르'로부터 마계에 올라탄 사도. 외형은 눈이 여러개 달린 거대한 거북. 사도 중 가장 큰 몸집을 가지고 있다. 등에 화산이 있을 정도. 화산은 가루바 화산이라고 이름까지 있는 듯. 마계의 구역 하나를 통째로 차지할 정도의 거체를 자랑하지만 대신 비교적 느리고 둔하다.")
  });
  $("section>.cont3>ul>li:nth-child(9)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/07-YUp63LLY"
    });
    $("section>.cont3>.text").text("용족들의 왕이자 아버지. 폭룡왕이라고 불린다. 바칼이 마계에 올라탔을 때 그의 막강한 능력으로 인정받아 제9사도에 봉해졌으나, 마계를 지배하려는 야욕을 드러내면서 모든 사도를 적으로 돌리게 되었다고 한다. 이에 힐더는 바칼을 사도에서 제명시키고 나머지 사도들과 마계인들의 힘을 모아 바칼과 전쟁을 치르게 되는데 이 전쟁이 바로 '용의 전쟁'이다. 전쟁에서 패한 바칼은 이계로 도망쳐 천계를 독재했으며 아라드에 자신의 용들을 풀어 혼란스럽게 만드는 등, 사악한 짓을 일삼아 왔다. 그러다 결국엔 500년 전, 천계의 기계혁명으로 천계인에게 패하여 사망했다고 전해진다.")
  });
  $("section>.cont3>ul>li:nth-child(10)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/PlMq0Oth03Q"
    });
    $("section>.cont3>.text").text("세 개의 눈과 네 개의 팔을 가진 늙은 인간의 외형을 가진 존재로, 체구가 굉장히 작고 벙어리에다 뛰어난 무력을 가진 것도 아닌, 사도로 칭하기에는 대단히 부족한 듯한 모습을 보인다. 그러나 루크는 이명에서 알 수 있듯이 건설에는 그를 따라올 수 있는 이가 없을 만큼 천재적인 실력을 가지고 있었으며, 항상 본능적으로 무언가를 짓고자 하는 습성을 보이기 때문에 힐더는 그를 발견한 후 그의 건설 능력을 높이 평가하여 엉망이 된 마계를 재건하는 데 이용했다.")
  });
  $("section>.cont3>ul>li:nth-child(11)>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/kbYd7gacYUI"
    });
    $("section>.cont3>.text").text("오즈마의 피의 저주로 멸망의 위기에 처했을 때 계시를 받은 프리스트들을 이끌고 나타났으며, 검은 성전에서 오즈마와 3인의 암흑기사를 봉인함으로서 세상을 구한다. 이후 아라드 곳곳에 교단을 창설하여 더 많은 프리스트들을 양성하도록 하였고, 그 직후 홀연히 사라져버렸다고 한다. 오랜 시간이 지나도 소년의 모습을 하고 있었다고 전해지며, 앞뒤 행적에 비춰봤을 때 그의 정체는 평범한 인간이 아닌 신, 혹은 신의 계시를 받은 천사일 것으로 추측된다.")
  });
  $("section>.cont3>ul>li:last-child>a").on("click", function (evt) {
    evt.preventDefault();
    $(".video-containers>iframe").attr({
      src: "https://www.youtube.com/embed/2pZFvdbVPMc"
    });
    $("section>.cont3>.text").text("'피의 저주'를 일으켜 인간들을 서로 불신하게 만들고 세계 전체에 혼란을 조장한 악마. 과거엔 그 역시 인간이었으나 세상에 원한을 품고 사신과 거래하여 혼돈의 신이 되었다고 한다. 이 피의 저주로 인해 아라드 대륙은 서로에 대한 불신과 내분이 이어진 끝에 하마터면 멸망할 뻔했으나, 어느 날 홀연히 나타난 성안의 미카엘라를 필두로 위장자를 구별할 수 있는 프리스트들이 양성되고 오즈마에 대항하기 시작하면서 결국 오즈마는 검은 성전에서 패배하여 다른 차원에 봉인되고 만다.")
  });
  // -------------------------------------------------------------------------
});

