$(function () {
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

  //visual
  // 글자 올라오는 움직임 delay up
  let i = -1;
  function up() {
    if (i < 100) {
      //무한으로 반복되는거 방지하는 조건문
      $("#visual .inner h2").find("span").eq(i).css({
        transform: "translateY(0%)",
        transition: "0.5s",
        opacity: "100%",
      });
      i++;
    }
  }

  up();
  setTimeout(function () {
    title = setInterval(up, 100);
  }, 1500);

  //드래그 이벤트
  $(document).ready(function () {
    $("#visual .moveBox").draggable({
      //  axis: "x", //x축으로만 드래그 가능하도록 설정
      containment: "#visual .inner",
      snap: "#visual .inner",
    });
  });
  $("#visual .inner")
    .stop()
    .animate(
      {
        width: "120%",
        height: "120%",
      },
      1500,
      function () {
        $("#visual .inner .txt").find("p").stop().animate({});
      }
    );

  // 블러 해제
  $("#visual .bgBlur").click(function () {
    $(this).addClass("on");
    black();
    $("#visual .txt").addClass("on");
    $("#visual .inner").stop().animate(
      {
        width: "120%",
        height: "120%",
      },
      0
    );
    $("#visual .logo").css({
      display: "none",
    });
  });

  // 클릭시 색상 표시
  $("#visual .moveBox > div > div")
    .children(".image")
    .click(function () {
      $("#visual .moveBox > div").children("div").removeClass("on");
      $(this).parent().addClass("on");

      $("#visual .moveBox div").children(".image").removeClass("on");
      $(this).addClass("on");
    });

  // con1
  // let innerH2 = $("#con1 .inner h3");
  // console.log($("#con1 .inner h3"));
  // // let j = -1;

  // function up() {
  //   if (i < 100) {
  //     //무한으로 반복되는거 방지하는 조건문
  //     $(innerH2).find("span").eq(i).css({
  //       transform: "translateY(0%)",
  //       transition: "0.5s",
  //       opacity: "100%",
  //     });
  //     j++;
  //   }
  // }

  // up();
  // setTimeout(function () {
  //   title = setInterval(up, 100);
  // }, 300);

  //con1 글자 움직임
  function con1() {
    $("#con1 .inner .left").addClass("on");
    for (let i = 0; i < 20; i++) {
      setTimeout(function () {
        $("#con1 .inner .left h3").find("span").eq(i).addClass("on");
      }, i * 50);
    }
  }

  // con1 example 버튼
  $("#con1 .example span").click(function () {
    $(this).siblings("span").removeClass("on");
    $(this).addClass("on");

    $("#con1 .sample_box div").stop().animate(
      {
        left: "150%",
      },
      0
    );
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        $("#con1 .sample_box div").eq(i).stop().animate(
          {
            left: "0%",
          },
          1000
        );
      }, i * 100);
    }
  });

  // input 클릭
  $("#con1 .search_color input").click(function () {
    $(this).val("");
    $(this).css({
      color: "#000",
    });
  });
  $("#con1 .search_color input").change(function () {
    $("#con1 .right ul li input").val("1");
    $("#con1 .right ul li input").css({
      color: "#000",
    });
  });

  // check_color 버튼 클릭
  $("#con1 .check_color").click(function () {
    $("#con1 .example span").removeClass("on");
    $("#con1 .sample_box div").stop().animate(
      {
        left: "150%",
      },
      0
    );
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        $("#con1 .sample_box div").eq(i).stop().animate(
          {
            left: "0%",
          },
          1000
        );
      }, i * 100);
    }

    // user 입력으로 색상변경
    let inputValue1 = $("#con1 .sc_box1").children("input").val();
    let inputValue2 = $("#con1 .sc_box2").children("input").val();
    let inputValue3 = $("#con1 .sc_box3").children("input").val();

    $("#con1 .sample_box div").eq(0).css({
      backgroundColor: inputValue1,
    });
    $("#con1 .sample_box div").eq(1).css({
      backgroundColor: inputValue2,
    });
    $("#con1 .sample_box div").eq(2).css({
      backgroundColor: inputValue3,
    });
  });

  //색상 변경
  $("#con1 .example span").each(function (idx, i) {
    $(i).click(function () {
      // console.log(idx);
      switch (idx) {
        case 0:
          $("#con1 .search_color li").eq(0).children("input").val("EF4630");
          $("#con1 .sample_box div").eq(0).css({
            backgroundColor: "#EF4630",
          });
          $("#con1 .search_color li").eq(1).children("input").val("56A4BF");
          $("#con1 .sample_box div").eq(1).css({
            backgroundColor: "#56A4BF",
          });
          $("#con1 .search_color li").eq(2).children("input").val("FFC431");
          $("#con1 .sample_box div").eq(2).css({
            backgroundColor: "#FFC431",
          });
          break;

        case 1:
          $("#con1 .search_color li").eq(0).children("input").val("FFEA55");
          $("#con1 .sample_box div").eq(0).css({
            backgroundColor: "#FFEA55",
          });
          $("#con1 .search_color li").eq(1).children("input").val("FF8710");
          $("#con1 .sample_box div").eq(1).css({
            backgroundColor: "#FF8710",
          });
          $("#con1 .search_color li").eq(2).children("input").val("49CE17");
          $("#con1 .sample_box div").eq(2).css({
            backgroundColor: "#49CE17",
          });
          break;

        case 2:
          $("#con1 .search_color li").eq(0).children("input").val("83D0E5");
          $("#con1 .sample_box div").eq(0).css({
            backgroundColor: "#83D0E5",
          });
          $("#con1 .search_color li").eq(1).children("input").val("3289D8");
          $("#con1 .sample_box div").eq(1).css({
            backgroundColor: "#3289D8",
          });
          $("#con1 .search_color li").eq(2).children("input").val("0D1FA3");
          $("#con1 .sample_box div").eq(2).css({
            backgroundColor: "#0D1FA3",
          });
          break;

        case 3:
          $("#con1 .search_color li").eq(0).children("input").val("731A0D");
          $("#con1 .sample_box div").eq(0).css({
            backgroundColor: "#731A0D",
          });
          $("#con1 .search_color li").eq(1).children("input").val("E2A73D");
          $("#con1 .sample_box div").eq(1).css({
            backgroundColor: "#E2A73D",
          });
          $("#con1 .search_color li").eq(2).children("input").val("2D632A");
          $("#con1 .sample_box div").eq(2).css({
            backgroundColor: "#2D632A",
          });
          break;

        case 4:
          $("#con1 .search_color li").eq(0).children("input").val("EA6363");
          $("#con1 .sample_box div").eq(0).css({
            backgroundColor: "#EA6363",
          });
          $("#con1 .search_color li").eq(1).children("input").val("641B68");
          $("#con1 .sample_box div").eq(1).css({
            backgroundColor: "#641B68",
          });
          $("#con1 .search_color li").eq(2).children("input").val("8449E2");
          $("#con1 .sample_box div").eq(2).css({
            backgroundColor: "#8449E2",
          });
          break;
      }
    });
  });

  $("#con2 .color_slide")
    .children("p")
    .click(function () {
      $(this).parent("div").parent("li").toggleClass("on");
    });

  function white() {
    $("header a").css({ color: "white", transition: "0.5s" });
    $("#header h1 img").css({ filter: "invert(1)", transition: "0.5s" });
    $("#header ul li a span").css({ background: "#fff", transition: "0.5s" });
    $("#header .menubar .barinner p").css({
      background: "#fff",
      transition: "0.5s",
    });
  }
  function black() {
    $("header a").css({ color: "black", transition: "0.5s" });
    $("#header h1 img").css({ filter: "invert(0)", transition: "0.5s" });
    $("#header ul li a span").css({ background: "#000", transition: "0.5s" });
    $("#header .menubar .barinner p").css({
      background: "#000",
      transition: "0.5s",
    });
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
      white();
      setTimeout(function () {
        con1();
      }, 500);
    }
    if (scroll >= pos1 && scroll < pos2) {
      black();

      setTimeout(function () {
        $("#con1 .right .sample_box").addClass("go");
      }, 100);

      // setTimeout(function () {
      //   colorP();
      // }, 500);
      setTimeout(() => {
        $(".button_wrap").addClass("on");
      }, 1000);
    } else if (scroll >= pos2 && scroll < pos3) {
      white();
      $('#con2 .right li').addClass('on');

      for (let i = 0; i < 7; i++) {
        setTimeout(function () {
          // $(".openColor").eq(i).click();
          $('#con2 .right .openColor').eq(i).css({
            transitionDelay:$(0.1 * i)+'s',
           })
        }, i * 200);
      }

     

    } else if (scroll >= pos3 && scroll < pos4) {
      black();
      setTimeout(function () {
        $("#con3 ul li").removeClass("up");
        $("#con3 ul li").removeClass("down");
      }, 500);
      setTimeout(function () {
        for (let i = 0; i < 5; i++) {
          setTimeout(function () {
            $("#con3 .txt").eq(i).addClass("on");
          }, i * 100);
        }
      }, 1200);
    }
  });
});
