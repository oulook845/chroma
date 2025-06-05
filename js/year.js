$(document).ready(function () {
  // mbbox
  $("#header .menubar").click(function () {
    $(".mbbox").addClass("on");
    $(".mbbox .title").addClass("on");
  });
  $(".mbbox .menubar").click(function () {
    $(".mbbox").removeClass("on");
    $(".mbbox .title").removeClass("on");
    setTimeout(function () {
      $(".mbbox").children(".box").css({
        width: "100%",
      });
    }, 1000);
  });
  // 클릭시 해당창 확대
  mbScale();
  function mbScale() {
    let mbClass = 0;
    $(".mbbox")
      .children(".box")
      .click(function () {
        if (mbClass == 0) {
          clearInterval(mbIntervalId);
          $(this).siblings(".box").css({
            width: "0%",
          });
          $(this).css({
            width: "400%",
          });
          mbStart();
          mbClass = 1;
        } else {
          clearInterval(mbIntervalId);
          $(this).css({
            width: "100%",
          });
          $(this).siblings(".box").css({
            width: "100%",
          });
          mbStart();
          mbClass = 0;
        }
      });
  }

  // image slide
  let mbIndex = 0;
  let totalMb = $(".mbbox .box2 p ").length;
  let mbIntervalId;

  mbStart();
  function mbStart() {
    mbIntervalId = setInterval(mbSlide, 3000);
  }

  function mbSlide() {
    $(".mbbox .box2 p").eq(mbIndex).removeClass("on");
    $(".mbbox .box4 p").eq(mbIndex).removeClass("on");
    // console.log(mbIndex);
    mbIndex = (mbIndex + 1) % totalMb;
    $(".mbbox .box2 p").eq(mbIndex).addClass("on");
    $(".mbbox .box4 p").eq(mbIndex).addClass("on");
    // console.log(mbIndex);
  }

  // visual
  let innerH2 = $("#visual .inner h2");
  let i = -1;
  function up() {
    if (i < 100) {
      //무한으로 반복되는거 방지하는 조건문
      $(innerH2).find("span").eq(i).css({
        transform: "translateY(0%)",
        transition: "0.5s",
        opacity: "100%",
      });
      i++;
    }
  }

  setTimeout(function () {
    title = setInterval(up, 100);
  }, 100);

  setTimeout(() => {
    $("#visual").addClass("on");
    $("#visual .text").css({
      right: "-5%",
      transition: "0.5s",
    });
  }, 1500);

  $(".circle").addClass("on");
  $(".move_on").addClass("on");
  $(".buttonF").addClass("on");
  $(".buttonS").addClass("on");
  $(".buttonT").addClass("on");

  let btn_circle1 = true;
  let btn_circle2 = true;
  let btn_circle3 = true;
  let btn_circle4 = true;

  function trueBtn() {
    btn_circle1 = true;
    btn_circle2 = true;
    btn_circle3 = true;
    btn_circle4 = true;
  }

  function falseBtn() {
    btn_circle1 = false;
    btn_circle2 = false;
    btn_circle3 = false;
    btn_circle4 = false;
  }

  $(".buttonAll .circle").on("click", function () {
    if (btn_circle1 == true) {
      falseBtn();
      $(".circle").removeClass("on");
      $(".move_on").removeClass("on");
      $(".buttonF").removeClass("on");
      $(".buttonS").removeClass("on");
      $(".buttonT").removeClass("on");
      for (let i = 0; i < 36; i++) {
        $(".white_con").eq(i).parent("li").fadeOut();
      }
    } else {
      trueBtn();
      $(".circle").addClass("on");
      $(".move_on").addClass("on");
      $(".buttonF").addClass("on");
      $(".buttonS").addClass("on");
      $(".buttonT").addClass("on");
      for (let i = 0; i < 36; i++) {
        $(".white_con").eq(i).parent("li").fadeIn();
      }
    }
  });

  $(".buttonF .circle").on("click", function () {
    if (btn_circle2 == true) {
      btn_circle2 = !btn_circle2;
      $(this).removeClass("on");
      $(".buttonF").removeClass("on");
      $(".buttonF").find(".move_on").removeClass("on");
      for (let i = 0; i < 12; i++) {
        $(".white_con").eq(i).parent("li").fadeOut();
      }
      if (btn_circle1 == true) {
        btn_circle1 = !btn_circle1;
        $(".buttonAll .circle").removeClass("on");
      }
    } else {
      btn_circle2 = !btn_circle2;
      $(this).addClass("on");
      $(".buttonF").addClass("on");
      $(".buttonF").find(".move_on").addClass("on");
      for (let i = 0; i < 12; i++) {
        $(".white_con").eq(i).parent("li").fadeIn();
      }
    }
  });

  $(".buttonS .circle").on("click", function () {
    if (btn_circle3 == true) {
      btn_circle3 = !btn_circle3;
      $(this).removeClass("on");
      $(".buttonS").removeClass("on");
      $(".buttonS").find(".move_on").removeClass("on");
      for (let i = 11; i < 27; i++) {
        $(".white_con").eq(i).parent("li").fadeOut();
      }
      if (btn_circle1 == true) {
        btn_circle1 = !btn_circle1;
        $(".buttonAll .circle").removeClass("on");
      }
    } else {
      btn_circle3 = !btn_circle3;
      $(this).addClass("on");
      $(".buttonS").addClass("on");
      $(".buttonS").find(".move_on").addClass("on");
      for (let i = 11; i < 27; i++) {
        $(".white_con").eq(i).parent("li").fadeIn();
      }
    }
  });

  $(".buttonT .circle").on("click", function () {
    if (btn_circle4 == true) {
      btn_circle4 = !btn_circle4;
      $(this).removeClass("on");
      $(".buttonT").removeClass("on");
      $(".buttonT").find(".move_on").removeClass("on");
      for (let i = 26; i < 36; i++) {
        $(".white_con").eq(i).parent("li").fadeOut();
      }
      if (btn_circle1 == true) {
        btn_circle1 = !btn_circle1;
        $(".buttonAll .circle").removeClass("on");
      }
    } else {
      btn_circle4 = !btn_circle4;
      $(this).addClass("on");
      $(".buttonT").addClass("on");
      $(".buttonT").find(".move_on").addClass("on");
      for (let i = 26; i < 36; i++) {
        $(".white_con").eq(i).parent("li").fadeIn();
      }
    }
  });
  $(".circle").on("click", function () {
    if (
      btn_circle1 == false &&
      btn_circle2 == false &&
      btn_circle3 == false &&
      btn_circle4 == false
    ) {
      $(".none").css({ display: "block" });
    } else {
      $(".none").css({ display: "none" });
    }
  });

  $(".color_box").addClass("on");

  $(".white_con > .color_box").on("click", function () {
    var $this = $(this); // 현재 클릭된 요소를 변수에 저장

    if ($this.hasClass("on")) {
      $this.removeClass("on");
      setTimeout(function () {
        $this.addClass("on");
      }, 800);
    }
    var index = $(".color_box").index(this);

    var selectedColor = allColors[index];

    copyToClipboard(selectedColor);
    showCopySuccessMessage();
  });

  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function showCopySuccessMessage() {
    // 복사 완료 메시지 출력
    var message = document.createElement("div");
    message.textContent = "색상이 복사되었습니다!";
    message.style.position = "fixed";
    message.style.backgroundColor = "green";
    message.style.color = "white";
    message.style.padding = "40px";
    message.style.borderRadius = "5px";
    message.style.bottom = "25%";
    message.style.left = "15%";
    document.body.appendChild(message);

    // 메시지 2초뒤에 제거
    setTimeout(function () {
      document.body.removeChild(message);
    }, 2000);
  }

  const allColors = [
    "#f3958e",
    "#ffebe4",
    "#ba7765",
    "#7b6060",
    "#bba04f",
    "#d7ced1",
    "#334075",
    "#246d74",
    "#e4e0d5",
    "#f0f1eb",
    "#d3d4cc",
    "#353334",
    "#f57a6e",
    "#f88d97",
    "#d2393e",
    "#753d3c",
    "#c9e881",
    "#96b3de",
    "#ffc428",
    "#ac9041",
    "#814a7e",
    "#00b5d7",
    "#c4b396",
    "#4c4f47",
    "#dad9db",
    "#e3dac2",
    "#64676a",
    "#da997d",
    "#dacab1",
    "#f5e0b1",
    "#e7e3d8",
    "#a7b2b6",
    "#5b3532",
    "#44474c",
    "#a58f7a",
    "#99b6b2",
  ];

  $(".white_con").eq(0).parent("li").css({ backgroundColor: "#f3958e" });
  $(".white_con").eq(0).find(".color_box").css({ backgroundColor: "#d85f56" });
  $(".white_con")
    .eq(0)
    .find(".button--bubble__container .effect-button")
    .css({ backgroundColor: "#d85f56" });
  $(".white_con")
    .eq(0)
    .find(".button--bubble__effect-container .circle")
    .css({ backgroundColor: "#d85f56" });

  $(".white_con").eq(1).parent("li").css({ backgroundColor: "#ffebe4" });
  $(".white_con").eq(1).find(".color_box").css({ backgroundColor: "#e6bcac" });
  $(".white_con")
    .eq(1)
    .find(".button--bubble__container .effect-button")
    .css({ backgroundColor: "#e6bcac" });
  $(".white_con")
    .eq(1)
    .find(".button--bubble__effect-container .circle")
    .css({ backgroundColor: "#e6bcac" });

  $(".white_con").eq(2).parent("li").css({ backgroundColor: "#ba7765" });
  $(".white_con").eq(2).find(".color_box").css({ backgroundColor: "#984f3c" });
  $(".white_con")
    .eq(2)
    .find(".button--bubble__container .effect-button")
    .css({ backgroundColor: "#984f3c" });
  $(".white_con")
    .eq(2)
    .find(".button--bubble__effect-container .circle")
    .css({ backgroundColor: "#984f3c" });

  $(".white_con").eq(3).parent("li").css({ backgroundColor: "#7b6060" });
  $(".white_con").eq(3).find(".color_box").css({ backgroundColor: "#3c2c2c" });
  $(".white_con")
    .eq(3)
    .find(".button--bubble__container .effect-button")
    .css({ backgroundColor: "#3c2c2c" });
  $(".white_con")
    .eq(3)
    .find(".button--bubble__effect-container .circle")
    .css({ backgroundColor: "#3c2c2c" });

  $(".white_con").eq(8).parent("li").css({ backgroundColor: "#b6b3ab" });

  $(".white_con").eq(9).parent("li").css({ backgroundColor: "#cfcbc1" });

  $(".white_con").eq(30).parent("li").css({ backgroundColor: "#cfcbc1" });

  //외부 스크립트
  function lightenColor(color, factor) {
    const hex = color.slice(1);
    const num = parseInt(hex, 16);

    let r = (num >> 16) + factor;
    let g = ((num >> 8) & 0x00ff) + factor;
    let b = (num & 0x0000ff) + factor;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  }

  const colors = [
    "#bba04f",
    "#d7ced1",
    "#334075",
    "#246d74",
    "#e4e0d5",
    "#f0f1eb",
    "#d3d4cc",
    "#353334",
    "#f57a6e",
    "#f88d97",
    "#d2393e",
    "#753d3c",
    "#c9e881",
    "#96b3de",
    "#ffc428",
    "#ac9041",
    "#814a7e",
    "#00b5d7",
    "#c4b396",
    "#4c4f47",
    "#dad9db",
    "#e3dac2",
    "#64676a",
    "#da997d",
    "#dacab1",
    "#f5e0b1",
    "#e7e3d8",
    "#a7b2b6",
    "#5b3532",
    "#44474c",
    "#a58f7a",
    "#99b6b2",
  ];

  for (let i = 4; i <= 35; i++) {
    const lightenedColor = lightenColor(colors[i - 4], 30);
    if (i !== 8 && i !== 9 && i !== 30) {
      $(".white_con")
        .eq(i)
        .parent("li")
        .css({ backgroundColor: lightenedColor });
    }
    $(".white_con")
      .eq(i)
      .find(".color_box")
      .css({ backgroundColor: colors[i - 4] });
    $(".white_con")
      .eq(i)
      .find(".button--bubble__container .effect-button")
      .css({ backgroundColor: colors[i - 4] });
    $(".white_con")
      .eq(i)
      .find(".button--bubble__effect-container .circle")
      .css({ backgroundColor: colors[i - 4] });
  }

  // if(scrollPosition >= con2ScrollTop){
  //   $(".color_board").addClass("on")
  //   setTimeout(function(){
  //     $(".text_wrap").addClass("on")
  //   },1400)
  // }
  // if(scrollPosition >= con3ScrollTop){
  //   setTimeout(function(){
  //     $("#con3 #inner .title").addClass("on");
  //     $(".color_wrap").addClass("on");

  //   },500)

  //   setTimeout(function(){
  //     $(".wee").addClass("on")
  //   },2400)

  // }

  $(".scroll_box ul li").fadeOut(10);

  function colorP() {
    setTimeout(function () {
      for (let i = 0; i < 40; i++) {
        setTimeout(function () {
          $(".scroll_box ul li").eq(i).fadeIn();
        }, i * 50);
      }
    }, 300);
  }

  baseLine = 200;
  var pos1 = $("#visual").offset().top + baseLine;
  var pos2 = $("#con1").offset().top + baseLine;
  var pos3 = $("#con2").offset().top + baseLine;
  var pos4 = $("#con3").offset().top + baseLine;
  // console.log(pos1);
  // console.log(pos2);
  // console.log(pos3);
  // console.log(pos4);

  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll < pos1) {
      $("header a").css({ color: "white", transition: "0.5s" });
      $("#header h1 img").css({ filter: "invert(1)", transition: "0.5s" });
      $("#header ul li a span").css({ background: "#fff", transition: "0.5s" });
      $("#header .menubar .barinner p").css({
        background: "#fff",
        transition: "0.5s",
      });
    }
    if (scroll >= pos1 && scroll < pos2) {
      setTimeout(function () {
        $("#con1 .black").addClass("on");
        $("#con1 .buttonAll").addClass("onS");
        $("#con1 .buttonF").addClass("onS");
        $("#con1 .buttonS").addClass("onS");
        $("#con1 .buttonT").addClass("onS");
        colorP();
      }, 500);
      $("header a").css({ color: "black", transition: "0.5s" });
      $("#header h1 img").css({ filter: "invert(0)", transition: "0.5s" });
      $("#header ul li a span").css({ background: "#000", transition: "0.5s" });
      $("#header .menubar .barinner p").css({
        background: "#000",
        transition: "0.5s",
      });
    } else if (scroll >= pos2 && scroll < pos3) {
      $(".color_board").addClass("on");
      setTimeout(function () {
        $(".text_wrap").addClass("on");
      }, 1400);
    } else if (scroll >= pos3 && scroll < pos4) {
      setTimeout(function () {
        $("#con3 #inner .title").addClass("on");
        $(".color_wrap").addClass("on");
      }, 500);

      setTimeout(function () {
        $(".wee").addClass("on");
      }, 2400);
    }
  });

  // if(index>0){

  //   $("#con1 .right").addClass("on")
  //   $("#con1 .black").addClass("on")

  //     $("#con1 .buttonAll").addClass("onS")
  //     $("#con1 .buttonF").addClass("onS")
  //     $("#con1 .buttonS").addClass("onS")
  //     $("#con1 .buttonT").addClass("onS")

  //   setTimeout(function(){
  //     for(let i=0;i<40;i++){
  //       setTimeout(function(){
  //         $(".scroll_box ul li").eq(i).fadeIn()
  //         },i*50)
  //       }
  //     },300)

  //     $("header a").css({ color: "black", transition: "0.5s" });
  //       $("#header h1 img").css({ filter: "invert(0)", transition: "0.5s" });
  //       $("#header ul li a span").css({
  //         background: "#000",
  //         transition: "0.5s",
  //       });
  //       $("#header .menubar .barinner p").css({
  //         background: "#000",
  //         transition: "0.5s",
  //       });

  // }
});
